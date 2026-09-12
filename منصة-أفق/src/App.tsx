import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  CirclePlay,
  Clock3,
  Compass,
  FileText,
  Flame,
  LayoutDashboard,
  Library,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Play,
  Search,
  Settings,
  Sparkles,
  Target,
  Trash2,
  Trophy,
  X,
} from 'lucide-react'
import ExplorePage from './ExplorePage'
import CourseCard from './components/CourseCard'
import CourseModal from './components/CourseModal'
import NavItem from './components/NavItem'
import StatCard from './components/StatCard'
import { courses, type Course } from './data/courses'

const schedule = [
  { day: 'الأحد', date: '08', active: false },
  { day: 'الإثنين', date: '09', active: true },
  { day: 'الثلاثاء', date: '10', active: false },
  { day: 'الأربعاء', date: '11', active: false },
  { day: 'الخميس', date: '12', active: false },
  { day: 'الجمعة', date: '13', active: false },
]

type Notice = { id: number; text: string; read: boolean }
type PlanTask = { id: number; kind: 'book' | 'chat'; title: string; sub: string; time: string; done: boolean }

const LOCAL_STORAGE_KEY = 'madar-library'

export default function App() {
  const [activeNav, setActiveNav] = useState('نظرة عامة')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0])
  const [courseModal, setCourseModal] = useState<Course | null>(null)
  const [notices, setNotices] = useState<Notice[]>([
    { id: 1, text: 'لديك درس جديد في تجربة المستخدم', read: false },
    { id: 2, text: 'أكملت 72% من دورتك الحالية', read: false },
  ])
  const [planTasks, setPlanTasks] = useState<PlanTask[]>([
    { id: 1, kind: 'book', title: 'مراجعة أساسيات البحث', sub: 'تجربة المستخدم · الدرس 4', time: '10:00 ص', done: true },
    { id: 2, kind: 'chat', title: 'جلسة محادثة مباشرة', sub: 'الإنجليزية · مع مريم', time: '06:30 م', done: false },
  ])
  const [library, setLibrary] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]') as string[]
    } catch {
      return []
    }
  })
  const toastTimer = useRef<number | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const planRef = useRef<HTMLDivElement>(null)
  const achRef = useRef<HTMLDivElement>(null)

  const notify = (message: string) => {
    setToast(message)
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(''), 3200)
  }

  const toggleLibrary = (title: string) => {
    const removing = library.includes(title)
    setLibrary((prev) => {
      const next = removing ? prev.filter((course) => course !== title) : [...prev, title]
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next))
      } catch {
        // التخزين غير متاح (وضع الخصوصية مثلًا) — الواجهة تعمل دون حفظ
      }
      return next
    })
    notify(removing ? `أُزيلت دورة ${title} من مكتبتك` : `أُضيفت دورة ${title} إلى مكتبتك`)
  }

  // إغلاق النوافذ المنبثقة بمفتاح Escape + تنظيف المؤقت
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCourseModal(null)
        setShowNotifications(false)
        setShowMenu(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (toastTimer.current) window.clearTimeout(toastTimer.current)
    }
  }, [])

  // ⌘K / Ctrl+K → تركيز حقل البحث
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // إغلاق الإشعارات عند النقر خارجها
  useEffect(() => {
    if (!showNotifications) return
    const onPointerDown = (event: PointerEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [showNotifications])

  // تمرير سلس عند تغيير القسم
  useEffect(() => {
    if (activeNav === 'الجدول') planRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else if (activeNav === 'إنجازاتي') achRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else if (activeNav === 'نظرة عامة') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeNav])

  const unreadCount = notices.filter((item) => !item.read).length
  const dismissNotice = (id: number) => setNotices((prev) => prev.filter((item) => item.id !== id))
  const markAllRead = () => setNotices((prev) => prev.map((item) => ({ ...item, read: true })))

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'صباح الخير' : hour < 18 ? 'مساء الخير' : 'تصبح على خير'
  const today = new Date().toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' })
  const lessonNo = Math.max(1, Math.min(selectedCourse.lessons, Math.round((selectedCourse.progress / 100) * selectedCourse.lessons)))
  const doneCount = planTasks.filter((task) => task.done).length
  const libraryCourses = courses.filter((course) => library.includes(course.title))

  const openCourse = (course: Course) => {
    setSelectedCourse(course)
    setCourseModal(course)
  }

  return (
    <div className="app-shell">
<aside className={`sidebar ${showMenu ? 'is-open' : ''}`}>
        <div className="brand">
          <span className="brand-mark">م</span>
          <strong>مَدار</strong>
          <small>مساحة تعلمك</small>
        </div>
        <nav className="main-nav" aria-label="التنقل الرئيسي">
          <p className="nav-label">مساحتك</p>
          <NavItem
            icon={<LayoutDashboard size={19} />}
            label="نظرة عامة"
            active={activeNav === 'نظرة عامة'}
            onClick={() => {
              setActiveNav('نظرة عامة')
              setShowMenu(false)
            }}
          />
          <NavItem
            icon={<Compass size={19} />}
            label="استكشف الدورات"
            active={activeNav === 'استكشف الدورات'}
            onClick={() => {
              setActiveNav('استكشف الدورات')
              setShowMenu(false)
            }}
          />
          <NavItem
            icon={<Library size={19} />}
            label="مكتبتي"
            active={activeNav === 'مكتبتي'}
            count={library.length}
            onClick={() => {
              setActiveNav('مكتبتي')
              setShowMenu(false)
            }}
          />
          <p className="nav-label nav-label-spaced">متابعة</p>
          <NavItem
            icon={<CalendarDays size={19} />}
            label="الجدول"
            active={activeNav === 'الجدول'}
            onClick={() => {
              setActiveNav('الجدول')
              setShowMenu(false)
            }}
          />
          <NavItem
            icon={<Trophy size={19} />}
            label="إنجازاتي"
            active={activeNav === 'إنجازاتي'}
            onClick={() => {
              setActiveNav('إنجازاتي')
              setShowMenu(false)
            }}
          />
        </nav>
        <div className="sidebar-bottom">
          <div className="mentor-card">
            <div className="mentor-orb">
              <Sparkles size={19} />
            </div>
            <strong>تحتاج دفعة؟</strong>
            <span>اسأل مرشدك الآن</span>
            <button type="button" onClick={() => notify('تم إرسال طلبك إلى المرشد')}>
              تواصل مع المرشد <ArrowLeft size={15} />
            </button>
          </div>
          <NavItem icon={<Settings size={19} />} label="الإعدادات" active={false} onClick={() => notify('الإعدادات قيد التجهيز')} />
          <div className="profile-mini">
            <div className="avatar">أ</div>
            <div>
              <strong>أحمد</strong>
              <span>متعلّم نشط</span>
            </div>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>

      <main className="content">
<header className="topbar">
          <button
            type="button"
            className="icon-btn menu-trigger"
            aria-label="فتح القائمة"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className="search-box">
            <Search size={18} />
            <input
              ref={searchRef}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ابحث عن دورة أو مهارة..."
              aria-label="بحث"
            />
            <kbd>⌘ K</kbd>
          </div>
          <div className="top-actions">
            <button
              type="button"
              className="icon-btn notification-btn"
              aria-label={showNotifications ? 'إغلاق الإشعارات' : 'الإشعارات'}
              aria-expanded={showNotifications}
              aria-controls="notifications-panel"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} />
              {unreadCount > 0 && <i className="notif-dot" aria-hidden="true" />}
            </button>
            <div className="avatar avatar-top">أ</div>
          </div>
          {showNotifications && (
            <div id="notifications-panel" className="notification-pop" ref={notificationsRef}>
              <div className="notif-head">
                <strong>الإشعارات</strong>
                {unreadCount > 0 ? <span>{unreadCount} جديد</span> : <span>لا جديد</span>}
              </div>
              {notices.map((item) => (
                <div className={`notif-item ${item.read ? '' : 'unread'}`} key={item.id}>
                  <span>{item.text}</span>
                  <button type="button" aria-label="حذف الإشعار" onClick={() => dismissNotice(item.id)}>
                    <X size={14} />
                  </button>
                </div>
              ))}
              {notices.length > 0 && (
                <button type="button" className="notif-clear" onClick={markAllRead}>
                  تعيين الكل كمقروء
                </button>
              )}
            </div>
          )}
        </header>

        {activeNav === 'استكشف الدورات' ? (
          <ExplorePage query={search} onNotify={notify} library={library} onToggleLibrary={toggleLibrary} />
        ) : activeNav === 'مكتبتي' ? (
          <div className="page-wrap">
            <section className="welcome-row">
              <div>
                <p className="eyebrow">مساحتك الخاصة</p>
                <h1>
                  مكتبتي <span>✦</span>
                </h1>
                <p className="welcome-copy">{libraryCourses.length} دورة في مكتبتك الآن</p>
              </div>
              <button type="button" className="text-btn" onClick={() => setActiveNav('استكشف الدورات')}>
                تصفح الدورات <ChevronLeft size={17} />
              </button>
            </section>
            {libraryCourses.length === 0 ? (
              <div className="empty-state">
                <Library size={34} />
                <strong>مكتبتك فارغة</strong>
                <span>أضف دورات من صفحة الاستكشاف لتظهر هنا</span>
              </div>
            ) : (
              <div className="explore-grid library-grid">
                {libraryCourses.map((course) => (
                  <div className="library-card" key={course.title}>
                    <button
                      type="button"
                      className="library-remove"
                      aria-label={`إزالة ${course.title} من المكتبة`}
                      onClick={() => toggleLibrary(course.title)}
                    >
                      <Trash2 size={14} />
                    </button>
                    <CourseCard
                      course={course}
                      selected={false}
                      onSelect={() => openCourse(course)}
                      onPlay={() => notify(`تم تشغيل: ${course.title}`)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
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
              <button type="button" className="primary-btn" onClick={() => setActiveNav('استكشف الدورات')}>
                <Compass size={18} /> استكشف شيئًا جديدًا
              </button>
            </section>

            <section className="stats-grid" aria-label="إحصاءات التعلم">
              <StatCard icon={<Flame size={21} />} label="سلسلة التعلم" value="12 يومًا" note="أفضل سلسلة لك!" tone="peach" />
              <StatCard icon={<Clock3 size={21} />} label="وقت التعلم" value="8س 24د" note="↑ 18% من الأسبوع الماضي" tone="lavender" />
              <StatCard icon={<Target size={21} />} label="هدف الأسبوع" value="4 / 6" note="تبقى درسان لإتمامه" tone="aqua" progress={67} />
            </section>

            <div className="dashboard-grid">
              <section className="section-block courses-section">
                <div className="section-heading">
                  <div>
                    <h2>تعلّمك الحالي</h2>
                    <p>استمر من حيث توقفت</p>
                  </div>
                  <button type="button" className="text-btn" onClick={() => setActiveNav('مكتبتي')}>
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
                        onSelect={() => openCourse(course)}
                        onPlay={() => notify(`تم تشغيل: ${course.title}`)}
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
                    onClick={() => notify(`يتم تشغيل الدرس في ${selectedCourse.title}`)}
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
                      setActiveNav('نظرة عامة')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    كل الجدول <ChevronLeft size={17} />
                  </button>
                </div>
                <div className="date-strip">
                  {schedule.map((item) => (
                    <button
                      type="button"
                      key={item.date}
                      className={item.active ? 'date active' : 'date'}
                      aria-pressed={item.active}
                      onClick={() => notify(`تم اختيار ${item.day}`)}
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
                      onClick={() => {
                        setPlanTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)))
                        notify(task.done ? 'تم التراجع عن الإكمال' : 'أحسنت! أُنجزت المهمة 🎉')
                      }}
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
                <button type="button" onClick={() => notify('تم فتح تفاصيل الشارة')}>
                  عرض التفاصيل <ArrowLeft size={15} />
                </button>
              </section>
            </div>
          </div>
        )}
      </main>

      {courseModal !== null && <CourseModal course={courseModal} onClose={() => setCourseModal(null)} notify={notify} />}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <Check size={17} /> {toast}
        </div>
      )}
    </div>
  )
}