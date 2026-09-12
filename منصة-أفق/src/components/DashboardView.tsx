import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronLeft,
  Clock3,
  Compass,
  Flame,
  MessageCircle,
  MoreHorizontal,
  Play,
  Target,
  Trophy,
  X,
} from 'lucide-react'
import CourseCard from './CourseCard'
import StatCard from './StatCard'
import { type Course } from '../data/courses'
import { type NavKey } from '../navigation'
import { type PlanTask } from '../types'

/** مرجع DOM بنمط useRef دون الاعتماد على أنواع React الداخلية */
type RefBox<T> = { current: T | null }

type DashboardViewProps = {
  selectedCourse: Course
  courses: Course[]
  search: string
  planTasks: PlanTask[]
  planRef: RefBox<HTMLDivElement>
  achRef: RefBox<HTMLDivElement>
  onOpenCourse: (course: Course) => void
  onPlay: (title: string) => void
  onNotify: (message: string) => void
  onNavigate: (key: NavKey) => void
  onTogglePlanTask: (id: number) => void
}

const SCHEDULE = [
  { day: 'الأحد', date: '08', active: false },
  { day: 'الإثنين', date: '09', active: true },
  { day: 'الثلاثاء', date: '10', active: false },
  { day: 'الأربعاء', date: '11', active: false },
  { day: 'الخميس', date: '12', active: false },
  { day: 'الجمعة', date: '13', active: false },
]

export default function DashboardView({
  selectedCourse,
  courses,
  search,
  planTasks,
  planRef,
  achRef,
  onOpenCourse,
  onPlay,
  onNotify,
  onNavigate,
  onTogglePlanTask,
}: DashboardViewProps) {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'صباح الخير' : hour < 18 ? 'مساء الخير' : 'تصبح على خير'
  const today = new Date().toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' })
  const lessonNo = Math.max(
    1,
    Math.min(selectedCourse.lessons, Math.round((selectedCourse.progress / 100) * selectedCourse.lessons)),
  )
  const doneCount = planTasks.filter((task) => task.done).length

  return (
    <div className="page-wrap">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">
            {today} <span className="status-dot" /> يومك مليء بالإمكانات
          </p>
          <h1>
            {greeting}، أحمد <span>✦</span>
          </h1>
          <p className="welcome-copy">خطوة صغيرة اليوم تصنع فرقًا كبيرًا في مستقبلك.</p>
        </div>
        <button type="button" className="primary-btn" onClick={() => onNavigate('explore')}>
          <Compass size={18} /> استكشف شيئًا جديدًا
        </button>
      </section>

      <section className="stats-grid" aria-label="إحصاءات التعلم">
        <StatCard icon={<Flame size={21} />} label="سلسلة التعلم" value="12 يومًا" note="أفضل سلسلة لك!" tone="peach" />
        <StatCard
          icon={<Clock3 size={21} />}
          label="وقت التعلم"
          value="8س 24د"
          note="↑ 18% من الأسبوع الماضي"
          tone="lavender"
        />
        <StatCard
          icon={<Target size={21} />}
          label="هدف الأسبوع"
          value="4 / 6"
          note="تبقى درسان لإتمامه"
          tone="aqua"
          progress={67}
        />
      </section>

      <div className="dashboard-grid">
        <section className="section-block courses-section">
          <div className="section-heading">
            <div>
              <h2>تعلّمك الحالي</h2>
              <p>استمر من حيث توقفت</p>
            </div>
            <button type="button" className="text-btn" onClick={() => onNavigate('library')}>
              عرض المكتبة <ChevronLeft size={17} />
            </button>
          </div>
          <div className="course-list">
            {courses
              .filter((course) => !search || course.title.includes(search) || course.category.includes(search))
              .map((course) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  selected={selectedCourse.title === course.title}
                  onSelect={() => onOpenCourse(course)}
                  onPlay={() => onPlay(course.title)}
                />
              ))}
          </div>
        </section>
        <section className="section-block continue-card">
          <div className="section-heading">
            <div>
              <h2>تابع التعلم</h2>
              <p>آخر درس وصلت إليه</p>
            </div>
            <button type="button" className="more-btn" aria-label="المزيد">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="lesson-art">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <span className="art-symbol">{selectedCourse.icon}</span>
            <span className="art-tag">{selectedCourse.category}</span>
          </div>
          <div className="lesson-meta">
            <span>{selectedCourse.category}</span>
            <span>
              <Clock3 size={14} /> {selectedCourse.duration}
            </span>
          </div>
          <h3>الدرس «{selectedCourse.title}»</h3>
          <div className="lesson-footer">
            <div className="mini-progress">
              <span style={{ width: `${selectedCourse.progress}%` }} />
            </div>
            <strong>
              الدرس {lessonNo} من {selectedCourse.lessons}
            </strong>
            <button
              type="button"
              className="play-btn"
              aria-label="تشغيل الدرس"
              onClick={() => onNotify(`يتم تشغيل الدرس في ${selectedCourse.title}`)}
            >
              <Play size={17} fill="currentColor" />
            </button>
          </div>
        </section>
      </div>
      <div className="lower-grid">
        <section className="section-block weekly-plan" ref={planRef}>
          <div className="section-heading">
            <div>
              <h2>خطة هذا الأسبوع</h2>
              <p>
                أنجزت {doneCount} من {planTasks.length} مهام اليوم
              </p>
            </div>
            <button
              type="button"
              className="text-btn"
              onClick={() => {
                onNavigate('overview')
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
              }}
            >
              كل الجدول <ChevronLeft size={17} />
            </button>
          </div>
          <div className="date-strip">
            {SCHEDULE.map((item) => (
              <button
                type="button"
                key={item.date}
                className={item.active ? 'date active' : 'date'}
                aria-pressed={item.active}
                onClick={() => onNotify(`تم اختيار ${item.day}`)}
              >
                <span>{item.day}</span>
                <strong>{item.date}</strong>
              </button>
            ))}
          </div>
          {planTasks.map((task) => (
            <div className={`plan-item ${task.done ? 'is-done' : ''}`} key={task.id}>
              <div className={`plan-icon ${task.kind === 'book' ? 'blue-icon' : 'coral-icon'}`}>
                {task.kind === 'book' ? <BookOpen size={18} /> : <MessageCircle size={18} />}
              </div>
              <div>
                <strong>{task.title}</strong>
                <span>{task.sub}</span>
              </div>
              <time>{task.time}</time>
              <button
                type="button"
                className="check-btn"
                aria-label={task.done ? 'إلغاء الإكمال' : 'تحديد كمكتمل'}
                aria-pressed={task.done}
                onClick={() => onTogglePlanTask(task.id)}
              >
                {task.done ? <Check size={17} /> : <X size={17} />}
              </button>
            </div>
          ))}
        </section>
        <section className="section-block achievement" ref={achRef}>
          <div className="achievement-glow" />
          <div className="trophy">
            <Trophy size={25} />
          </div>
          <p className="eyebrow">إنجاز جديد قريب</p>
          <h2>بقي لك 3 دروس</h2>
          <p>
            لتحصل على شارة
            <br />
            <strong>مستكشف المعرفة</strong>
          </p>
          <div className="achievement-bar">
            <span style={{ width: '80%' }} />
          </div>
          <small>8 من 10 دروس مكتملة</small>
          <button type="button" onClick={() => onNotify('تم فتح تفاصيل الشارة')}>
            عرض التفاصيل <ArrowLeft size={15} />
          </button>
        </section>
      </div>
    </div>
  )
}
