import type { ReactNode } from 'react'

type NavItemProps = {
  icon: ReactNode
  label: string
  active: boolean
  count?: number
  onClick: () => void
}

export default function NavItem({ icon, label, active, count, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      className={`nav-item ${active ? 'active' : ''}`}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
      {count !== undefined && count > 0 && <b className="nav-count">{count}</b>}
      {active && <i aria-hidden="true" />}
    </button>
  )
}