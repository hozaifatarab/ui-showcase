import { ChevronLeft, Library, Trash2 } from 'lucide-react'
import CourseCard from './CourseCard'
import { type Course } from '../data/courses'
import { type NavKey } from '../navigation'

type LibraryViewProps = {
  courses: Course[]
  onRemove: (title: string) => void
  onOpenCourse: (course: Course) => void
  onPlay: (title: string) => void
  onNavigate: (key: NavKey) => void
}

export default function LibraryView({ courses, onRemove, onOpenCourse, onPlay, onNavigate }: LibraryViewProps) {
  return (
    <div className="page-wrap">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">مساحتك الخاصة</p>
          <h1>
            مكتبتي <span>✦</span>
          </h1>
          <p className="welcome-copy">{courses.length} دورة في مكتبتك الآن</p>
        </div>
        <button type="button" className="text-btn" onClick={() => onNavigate('explore')}>
          تصفح الدورات <ChevronLeft size={17} />
        </button>
      </section>
      {courses.length === 0 ? (
        <div className="empty-state">
          <Library size={34} />
          <strong>مكتبتك فارغة</strong>
          <span>أضف دورات من صفحة الاستكشاف لتظهر هنا</span>
        </div>
      ) : (
        <div className="explore-grid library-grid">
          {courses.map((course) => (
            <div className="library-card" key={course.title}>
              <button
                type="button"
                className="library-remove"
                aria-label={`إزالة ${course.title} من المكتبة`}
                onClick={() => onRemove(course.title)}
              >
                <Trash2 size={14} />
              </button>
              <CourseCard
                course={course}
                selected={false}
                onSelect={() => onOpenCourse(course)}
                onPlay={() => onPlay(course.title)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
