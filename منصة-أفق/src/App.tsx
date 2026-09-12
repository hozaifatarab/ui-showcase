import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import CourseModal from './components/CourseModal'
import DashboardView from './components/DashboardView'
import ExplorePage from './ExplorePage'
import LibraryView from './components/LibraryView'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { courses, type Course } from './data/courses'
import { type NavKey } from './navigation'
import { type Notice, type PlanTask } from './types'

const LOCAL_STORAGE_KEY = 'madar-library'

export default function App() {
  const [activeNav, setActiveNav] = useState<NavKey>('overview')
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
    {
      id: 1,
      kind: 'book',
      title: 'مراجعة أساسيات البحث',
      sub: 'تجربة المستخدم · الدرس 4',
      time: '10:00 ص',
      done: true,
    },
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
  const planRef = useRef<HTMLDivElement>(null)
  const achRef = useRef<HTMLDivElement>(null)

  const notify = (message: string) => {
    setToast(message)
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(''), 3200)
  }

  const navigateTo = (key: NavKey) => {
    setActiveNav(key)
    setShowMenu(false)
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

  const togglePlanTask = (id: number) => {
    const task = planTasks.find((item) => item.id === id)
    setPlanTasks((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
    if (task) notify(task.done ? 'تم التراجع عن الإكمال' : 'أحسنت! أُنجزت المهمة 🎉')
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

  // تمرير سلس عند تغيير القسم (مع احترام تفضيل تقليل الحركة)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'
    if (activeNav === 'schedule') planRef.current?.scrollIntoView({ behavior, block: 'start' })
    else if (activeNav === 'achievements') achRef.current?.scrollIntoView({ behavior, block: 'start' })
    else if (activeNav === 'overview') window.scrollTo({ top: 0, behavior })
  }, [activeNav])

  const unreadCount = notices.filter((item) => !item.read).length
  const dismissNotice = (id: number) => setNotices((prev) => prev.filter((item) => item.id !== id))
  const markAllRead = () => setNotices((prev) => prev.map((item) => ({ ...item, read: true })))
  const libraryCourses = courses.filter((course) => library.includes(course.title))

  const openCourse = (course: Course) => {
    setSelectedCourse(course)
    setCourseModal(course)
  }

  const playCourse = (title: string) => notify(`تم تشغيل: ${title}`)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        تخطَّ إلى المحتوى
      </a>

      <Sidebar
        open={showMenu}
        activeNav={activeNav}
        onNavigate={navigateTo}
        libraryCount={library.length}
        onNotify={notify}
      />

      <main id="main-content" className="content">
        <Topbar
          search={search}
          onSearchChange={setSearch}
          showMenu={showMenu}
          onToggleMenu={() => setShowMenu(!showMenu)}
          showNotifications={showNotifications}
          onToggleNotifications={() => setShowNotifications(!showNotifications)}
          onCloseNotifications={() => setShowNotifications(false)}
          unreadCount={unreadCount}
          notices={notices}
          onDismissNotice={dismissNotice}
          onMarkAllRead={markAllRead}
        />

        {activeNav === 'explore' ? (
          <ExplorePage query={search} onNotify={notify} library={library} onToggleLibrary={toggleLibrary} />
        ) : activeNav === 'library' ? (
          <LibraryView
            courses={libraryCourses}
            onRemove={toggleLibrary}
            onOpenCourse={openCourse}
            onPlay={playCourse}
            onNavigate={navigateTo}
          />
        ) : (
          <DashboardView
            selectedCourse={selectedCourse}
            courses={courses}
            search={search}
            planTasks={planTasks}
            planRef={planRef}
            achRef={achRef}
            onOpenCourse={openCourse}
            onPlay={playCourse}
            onNotify={notify}
            onNavigate={navigateTo}
            onTogglePlanTask={togglePlanTask}
          />
        )}
      </main>

      {courseModal !== null && (
        <CourseModal course={courseModal} onClose={() => setCourseModal(null)} notify={notify} />
      )}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <Check size={17} /> {toast}
        </div>
      )}
    </div>
  )
}
