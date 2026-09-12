import { Fragment } from 'react'
import {
  ArrowLeft,
  CalendarDays,
  Compass,
  LayoutDashboard,
  Library,
  MoreHorizontal,
  Settings,
  Sparkles,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import NavItem from './NavItem'
import { NAV_GROUPS, NAV_LABELS, type NavKey } from '../navigation'

type SidebarProps = {
  /** فتح قائمة الجوال */
  open: boolean
  activeNav: NavKey
  onNavigate: (key: NavKey) => void
  libraryCount: number
  onNotify: (message: string) => void
}

const NAV_ICONS: Record<NavKey, LucideIcon> = {
  overview: LayoutDashboard,
  explore: Compass,
  library: Library,
  schedule: CalendarDays,
  achievements: Trophy,
}

export default function Sidebar({ open, activeNav, onNavigate, libraryCount, onNotify }: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? 'is-open' : ''}`} aria-label="القائمة الجانبية">
      <div className="brand">
        <span className="brand-mark">م</span>
        <strong>مَدار</strong>
        <small>مساحة تعلمك</small>
      </div>

      <nav className="main-nav" aria-label="التنقل الرئيسي">
        {NAV_GROUPS.map((group) => (
          <Fragment key={group.label}>
            <p className={`nav-label${group.label === 'متابعة' ? ' nav-label-spaced' : ''}`}>{group.label}</p>
            {group.keys.map((key) => {
              const Icon = NAV_ICONS[key]
              return (
                <NavItem
                  key={key}
                  icon={<Icon size={19} />}
                  label={NAV_LABELS[key]}
                  active={activeNav === key}
                  count={key === 'library' ? libraryCount : undefined}
                  onClick={() => onNavigate(key)}
                />
              )
            })}
          </Fragment>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="mentor-card">
          <div className="mentor-orb">
            <Sparkles size={19} />
          </div>
          <strong>تحتاج دفعة؟</strong>
          <span>اسأل مرشدك الآن</span>
          <button type="button" onClick={() => onNotify('تم إرسال طلبك إلى المرشد')}>
            تواصل مع المرشد <ArrowLeft size={15} />
          </button>
        </div>
        <NavItem
          icon={<Settings size={19} />}
          label="الإعدادات"
          active={false}
          onClick={() => onNotify('الإعدادات قيد التجهيز')}
        />
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
  )
}
