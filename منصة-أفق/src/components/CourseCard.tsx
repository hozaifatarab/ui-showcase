import { CirclePlay, Clock3, FileText } from 'lucide-react'
import type { Course } from '../data/courses'

type CourseCardProps = {
  course: Course
  selected: boolean
  onSelect: () => void
  onPlay: () => void
}

export default function CourseCard({ course, selected, onSelect, onPlay }: CourseCardProps) {
  return (
    <article
      className={`course-card ${selected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={course.title}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect()
        }
      }}
    >
      <div className={`course-icon ${course.color}`}>{course.icon}</div>
      <div className="course-info">
        <div className="course-title">
          <div>
            <span className="category">{course.category}</span>
            <h3>{course.title}</h3>
          </div>
          <button
            type="button"
            className="course-play"
            aria-label={`تشغيل ${course.title}`}
            onClick={(event) => {
              event.stopPropagation()
              onPlay()
            }}
          >
            <CirclePlay size={20} />
          </button>
        </div>
        <div className="course-details">
          <span>
            <FileText size={14} /> {course.lessons} درس
          </span>
          <span>
            <Clock3 size={14} /> {course.duration}
          </span>
          <strong>{course.progress}%</strong>
        </div>
        <div className="progress-track">
          <span style={{ width: `${course.progress}%` }} />
        </div>
      </div>
    </article>
  )
}