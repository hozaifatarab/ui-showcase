/**
 * مفاتيح التنقل الرئيسي + تسمياتها — مصدر واحد للحقيقة بدل السلاسل السحرية في المقارنات.
 */

export type NavKey = 'overview' | 'explore' | 'library' | 'schedule' | 'achievements'

export const NAV_LABELS: Record<NavKey, string> = {
  overview: 'نظرة عامة',
  explore: 'استكشف الدورات',
  library: 'مكتبتي',
  schedule: 'الجدول',
  achievements: 'إنجازاتي',
}

/** مجموعات التنقل كما تظهر في الشريط الجانبي */
export const NAV_GROUPS: { label: string; keys: NavKey[] }[] = [
  { label: 'مساحتك', keys: ['overview', 'explore', 'library'] },
  { label: 'متابعة', keys: ['schedule', 'achievements'] },
]
