import { useEffect, useRef } from 'react'
import { Bell, Menu, Search, X } from 'lucide-react'
import type { Notice } from '../types'

type TopbarProps = {
  search: string
  onSearchChange: (value: string) => void
  showMenu: boolean
  onToggleMenu: () => void
  showNotifications: boolean
  onToggleNotifications: () => void
  onCloseNotifications: () => void
  unreadCount: number
  notices: Notice[]
  onDismissNotice: (id: number) => void
  onMarkAllRead: () => void
}

const IS_MAC = /mac/i.test(navigator.platform ?? '')

export default function Topbar({
  search,
  onSearchChange,
  showMenu,
  onToggleMenu,
  showNotifications,
  onToggleNotifications,
  onCloseNotifications,
  unreadCount,
  notices,
  onDismissNotice,
  onMarkAllRead,
}: TopbarProps) {
  const searchRef = useRef<HTMLInputElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)

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

  // إغلاق لوحة الإشعارات عند النقر خارجها
  useEffect(() => {
    if (!showNotifications) return
    const onPointerDown = (event: PointerEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        onCloseNotifications()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [showNotifications, onCloseNotifications])

  return (
    <header className="topbar">
      <button
        type="button"
        className="icon-btn menu-trigger"
        aria-label="فتح القائمة"
        aria-expanded={showMenu}
        onClick={onToggleMenu}
      >
        {showMenu ? <X size={21} /> : <Menu size={21} />}
      </button>
      <div className="search-box">
        <Search size={18} />
        <input
          ref={searchRef}
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="ابحث عن دورة أو مهارة..."
          aria-label="بحث"
        />
        <kbd>{IS_MAC ? '⌘ K' : 'Ctrl K'}</kbd>
      </div>
      <div className="top-actions">
        <button
          type="button"
          className="icon-btn notification-btn"
          aria-label={showNotifications ? 'إغلاق الإشعارات' : 'الإشعارات'}
          aria-expanded={showNotifications}
          aria-controls="notifications-panel"
          onClick={onToggleNotifications}
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
              <button type="button" aria-label="حذف الإشعار" onClick={() => onDismissNotice(item.id)}>
                <X size={14} />
              </button>
            </div>
          ))}
          {notices.length > 0 && (
            <button type="button" className="notif-clear" onClick={onMarkAllRead}>
              تعيين الكل كمقروء
            </button>
          )}
        </div>
      )}
    </header>
  )
}
