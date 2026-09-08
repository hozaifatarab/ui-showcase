import { useState } from 'react'
import ExplorePage from './ExplorePage'
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
  Download,
  FileText,
  Flame,
  GraduationCap,
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
  Trophy,
  X,
} from 'lucide-react'

type Course = {
  title: string
  category: string
  progress: number
  lessons: number
  duration: string
  color: string
  icon: string
}

const courses: Course[] = [
  { title: 'أساسيات تجربة المستخدم', category: 'تصميم', progress: 72, lessons: 18, duration: '6 ساعات', color: 'coral', icon: '✦' },
  { title: 'الإنجليزية للمحادثة', category: 'لغات', progress: 45, lessons: 24, duration: '8 ساعات', color: 'mint', icon: 'Aa' },
  { title: 'مدخل إلى تحليل البيانات', category: 'تقنية', progress: 18, lessons: 16, duration: '5 ساعات', color: 'blue', icon: '∿' },
  { title: 'الكتابة الإبداعية', category: 'المهارات', progress: 30, lessons: 12, duration: '4 ساعات', color: 'yellow', icon: '✎' },
  { title: 'أساسيات إدارة المشاريع', category: 'الأعمال', progress: 55, lessons: 20, duration: '9 ساعات', color: 'purple', icon: '◫' },
  { title: 'التسويق بالمحتوى', category: 'التسويق', progress: 25, lessons: 10, duration: '3 ساعات', color: 'orange', icon: '◎' }
]

const schedule = [
  { day: 'الأحد', date: '08', active: false },
  { day: 'الإثنين', date: '09', active: true },
  { day: 'الثلاثاء', date: '10', active: false },
  { day: 'الأربعاء', date: '11', active: false },
  { day: 'الخميس', date: '12', active: false },
  { day: 'الجمعة', date: '13', active: false }
]

function App() {
  const [activeNav, setActiveNav] = useState('نظرة عامة')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState('')
  const [toast, setToast] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0])

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${showMenu ? 'is-open' : ''}`}>
        <div className="brand"><span className="brand-mark">م</span><span>مَدار</span><small>مساحة تعلمك</small></div>
        <nav className="main-nav" aria-label="التنقل الرئيسي">
          <p className="nav-label">مساحتك</p>
          <NavItem icon={<LayoutDashboard size={19} />} label="نظرة عامة" active={activeNav === 'نظرة عامة'} onClick={() => { setActiveNav('نظرة عامة'); setShowMenu(false) }} />
          <NavItem icon={<Compass size={19} />} label="استكشف الدورات" active={activeNav === 'استكشف الدورات'} onClick={() => { setActiveNav('استكشف الدورات'); setShowMenu(false) }} />
          <NavItem icon={<Library size={19} />} label="مكتبتي" active={activeNav === 'مكتبتي'} onClick={() => { setActiveNav('مكتبتي'); setShowMenu(false) }} />
          <p className="nav-label nav-label-spaced">متابعة</p>
          <NavItem icon={<CalendarDays size={19} />} label="الجدول" active={activeNav === 'الجدول'} onClick={() => { setActiveNav('الجدول'); setShowMenu(false) }} />
          <NavItem icon={<Trophy size={19} />} label="إنجازاتي" active={activeNav === 'إنجازاتي'} onClick={() => { setActiveNav('إنجازاتي'); setShowMenu(false) }} />
        </nav>
        <div className="sidebar-bottom">
          <div className="mentor-card"><div className="mentor-orb"><Sparkles size={19} /></div><strong>تحتاج دفعة؟</strong><span>اسأل مرشدك الآن</span><button onClick={() => notify('تم إرسال طلبك إلى المرشد')}>تواصل مع المرشد <ArrowLeft size={15} /></button></div>
          <NavItem icon={<Settings size={19} />} label="الإعدادات" active={false} onClick={() => notify('الإعدادات قيد التجهيز')} />
          <div className="profile-mini"><div className="avatar">س</div><div><strong>سارة أحمد</strong><span>متعلّمة نشطة</span></div><MoreHorizontal size={18} /></div>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <button className="icon-btn menu-trigger" aria-label="فتح القائمة" onClick={() => setShowMenu(!showMenu)}>{showMenu ? <X size={21} /> : <Menu size={21} />}</button>
          <div className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث عن دورة أو مهارة..." aria-label="بحث" /><kbd>⌘ K</kbd></div>
          <div className="top-actions"><button className="icon-btn notification-btn" aria-label="الإشعارات" onClick={() => setShowNotifications(!showNotifications)}><Bell size={20} /><i /></button><div className="avatar avatar-top">س</div></div>
          {showNotifications && <div className="notification-pop"><strong>الإشعارات</strong><span>لديك درس جديد في تجربة المستخدم</span><span>أكملت 72% من دورتك الحالية</span></div>}
        </header>

        {activeNav === 'استكشف الدورات' ? <ExplorePage query={search} onNotify={notify} /> : <div className="page-wrap">
          <section className="welcome-row">
            <div><p className="eyebrow">الإثنين، 9 سبتمبر 2024 <span className="status-dot" /> يومك مليء بالإمكانات</p><h1>صباح الخير، سارة <span>✦</span></h1><p className="welcome-copy">خطوة صغيرة اليوم تصنع فرقًا كبيرًا في مستقبلك.</p></div>
            <button className="primary-btn" onClick={() => notify('تم فتح مستكشف الدورات')}><Compass size={18} /> استكشف شيئًا جديدًا</button>
          </section>

          <section className="stats-grid" aria-label="إحصاءات التعلم">
            <StatCard icon={<Flame size={21} />} label="سلسلة التعلم" value="12 يومًا" note="أفضل سلسلة لك!" tone="peach" />
            <StatCard icon={<Clock3 size={21} />} label="وقت التعلم" value="8س 24د" note="↑ 18% من الأسبوع الماضي" tone="lavender" />
            <StatCard icon={<Target size={21} />} label="هدف الأسبوع" value="4 / 6" note="تبقى درسان لإتمامه" tone="aqua" progress={67} />
          </section>

          <div className="dashboard-grid">
            <section className="section-block courses-section"><div className="section-heading"><div><h2>تعلّمك الحالي</h2><p>استمر من حيث توقفت</p></div><button className="text-btn" onClick={() => setActiveNav('مكتبتي')}>عرض المكتبة <ChevronLeft size={17} /></button></div>
              <div className="course-list">{courses.filter((course) => course.title.includes(search) || course.category.includes(search) || !search).map((course) => <CourseCard key={course.title} course={course} selected={selectedCourse.title === course.title} onSelect={() => setSelectedCourse(course)} onPlay={() => notify(`تم تشغيل: ${course.title}`)} />)}</div>
            </section>
            <section className="section-block continue-card"><div className="section-heading"><div><h2>تابع التعلم</h2><p>آخر درس وصلت إليه</p></div><button className="more-btn" aria-label="المزيد"><MoreHorizontal size={20} /></button></div><div className="lesson-art"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><span className="art-symbol">✦</span><span className="art-tag">UX</span></div><div className="lesson-meta"><span>تصميم</span><span><Clock3 size={14} /> 18 دقيقة</span></div><h3>مبادئ التصميم المتمحور حول الإنسان</h3><div className="lesson-footer"><div className="mini-progress"><span style={{ width: '72%' }} /></div><strong>الدرس 12 من 18</strong><button className="play-btn" aria-label="تشغيل الدرس" onClick={() => notify('تم تشغيل الدرس')}><Play size={17} fill="currentColor" /></button></div></section>
          </div>

          <div className="lower-grid">
            <section className="section-block weekly-plan"><div className="section-heading"><div><h2>خطة هذا الأسبوع</h2><p>نظرة سريعة على جدولك</p></div><button className="text-btn" onClick={() => setActiveNav('الجدول')}>كل الجدول <ChevronLeft size={17} /></button></div><div className="date-strip">{schedule.map((item) => <button key={item.date} className={item.active ? 'date active' : 'date'} onClick={() => notify(`تم اختيار ${item.day}`)}><span>{item.day}</span><strong>{item.date}</strong></button>)}</div><div className="plan-item"><div className="plan-icon blue-icon"><BookOpen size={18} /></div><div><strong>مراجعة أساسيات البحث</strong><span>تجربة المستخدم · الدرس 4</span></div><time>10:00 ص</time><button className="check-btn" aria-label="تحديد كمكتمل" onClick={() => notify('رائع، تمت إضافة النشاط إلى إنجازاتك')}><Check size={17} /></button></div><div className="plan-item"><div className="plan-icon coral-icon"><MessageCircle size={18} /></div><div><strong>جلسة محادثة مباشرة</strong><span>الإنجليزية · مع مريم</span></div><time>06:30 م</time><button className="check-btn" aria-label="تحديد كمكتمل" onClick={() => notify('تم تذكيرك بالجلسة')}><Bell size={16} /></button></div></section>
            <section className="section-block achievement"><div className="achievement-glow" /><div className="trophy"><Trophy size={25} /></div><p className="eyebrow">إنجاز جديد قريب</p><h2>بقي لك 3 دروس</h2><p>لتحصل على شارة<br /><strong>مستكشف المعرفة</strong></p><div className="achievement-bar"><span style={{ width: '80%' }} /></div><small>8 من 10 دروس مكتملة</small><button onClick={() => notify('تم فتح تفاصيل الشارة')}>عرض التفاصيل <ArrowLeft size={15} /></button></section>
          </div>
        </div>}
      </main>
      {toast && <div className="toast"><Check size={17} /> {toast}</div>}
    </div>
  )
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) { return <button className={`nav-item ${active ? 'active' : ''}`} onClick={onClick}>{icon}<span>{label}</span>{active && <i />}</button> }
function StatCard({ icon, label, value, note, tone, progress }: { icon: React.ReactNode; label: string; value: string; note: string; tone: string; progress?: number }) { return <article className={`stat-card ${tone}`}><div className="stat-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{note}</small></div>{progress && <div className="stat-progress"><span style={{ width: `${progress}%` }} /></div>}</article> }
function CourseCard({ course, selected, onSelect, onPlay }: { course: Course; selected: boolean; onSelect: () => void; onPlay: () => void }) { return <article className={`course-card ${selected ? 'selected' : ''}`} onClick={onSelect}><div className={`course-icon ${course.color}`}>{course.icon}</div><div className="course-info"><div className="course-title"><div><span className="category">{course.category}</span><h3>{course.title}</h3></div><button className="course-play" aria-label={`تشغيل ${course.title}`} onClick={(event) => { event.stopPropagation(); onPlay() }}><CirclePlay size={20} /></button></div><div className="course-details"><span><FileText size={14} /> {course.lessons} درس</span><span><Clock3 size={14} /> {course.duration}</span><strong>{course.progress}%</strong></div><div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div></div></article> }

export default App
