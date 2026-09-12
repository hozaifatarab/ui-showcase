/**
 * الأنواع المشتركة لمنصة «مدار» — تُستورد من كل المكوّنات لتجنّب تعريف النوع مرتين.
 */

export type Notice = { id: number; text: string; read: boolean }

export type PlanTask = {
  id: number
  kind: 'book' | 'chat'
  title: string
  sub: string
  time: string
  done: boolean
}
