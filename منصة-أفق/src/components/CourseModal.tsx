import { useEffect, useId, useRef } from 'react'
import { Check, CirclePlay, Clock3, FileText, Play, X } from 'lucide-react'
import type { Course } from '../data/courses'
import { FALLBACK_LESSONS, lessonTopics } from '../data/courses'

type CourseModalProps = {
  course: Course
  onClose: () => void
  notify: (message: string) => void
}

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function CourseModal({ course, onClose, notify }: CourseModalProps) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const body = document.body
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    const focusables = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])

    focusables()[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus()
    }
  }, [])

  const lessons = lessonTopics[course.title] ?? FALLBACK_LESSONS
  const doneCount = Math.round((course.progress / 100) * lessons.length)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="course-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div className={`modal-icon ${course.color}`}>{course.icon}</div>
          <div className="modal-head-info">
            <span className="category">{course.category}</span>
            <h2 id={titleId}>{course.title}</h2>
            <p>
              <Clock3 size={14} /> {course.duration} · <FileText size={14} /> {course.lessons} درساً
            </p>
          </div>
          <button type="button" className="modal-close" aria-label="إغلاق النافذة" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-progress-label">
          <span>تقدمك في الدورة</span>
          <strong>{course.progress}%</strong>
        </div>
        <div className="modal-progress">
          <span style={{ width: `${course.progress}%` }} />
        </div>

        <h4 className="modal-lessons-title">دروس الدورة</h4>
        {lessons.map((lesson, index) => {
          const done = index < doneCount
          return (
            <div className={`modal-lesson ${done ? 'is-done' : ''}`} key={lesson}>
              <span className="lesson-index">{done ? <Check size={13} /> : index + 1}</span>
              <div className="lesson-info">
                <strong>{lesson}</strong>
                <span>{Math.max(5, 20 - index * 3)} دقيقة</span>
              </div>
              <button
                type="button"
                className="lesson-play"
                aria-label={`تشغيل الدرس: ${lesson}`}
                onClick={() => {
                  notify(`يتم تشغيل الدرس: ${lesson}`)
                  onClose()
                }}
              >
                <Play size={15} fill="currentColor" />
              </button>
            </div>
          )
        })}

        <button
          type="button"
          className="primary-btn modal-resume"
          onClick={() => {
            notify(`متابعة التعلم في دورة ${course.title}`)
            onClose()
          }}
        >
          <CirclePlay size={17} /> متابعة التعلم
        </button>
      </div>
    </div>
  )
}
