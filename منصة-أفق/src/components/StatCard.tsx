import type { ReactNode } from 'react'

type StatCardProps = {
  icon: ReactNode
  label: string
  value: string
  note: string
  tone: string
  progress?: number
}

export default function StatCard({ icon, label, value, note, tone, progress }: StatCardProps) {
  return (
    <article className={`stat-card ${tone}`}>
      <div className="stat-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>
      {progress !== undefined && (
        <div className="stat-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      )}
    </article>
  )
}
