/**
 * مصدر البيانات المشترك لمنصة «مدار» — مكوّن موحّد تشترك فيه كل الصفحات
 * لتجنّب تكرار البيانات وانحرافها بين ملف وآخر.
 */

export type Course = {
  title: string
  category: string
  progress: number
  lessons: number
  duration: string
  color: string
  icon: string
}

export type ExploreCourse = Course & {
  level: string
  students: string
  rating: string
}

export const courses: Course[] = [
  { title: 'أساسيات تجربة المستخدم', category: 'التصميم', progress: 72, lessons: 18, duration: '6 ساعات', color: 'coral', icon: '✦' },
  { title: 'الإنجليزية للمحادثة', category: 'اللغات', progress: 45, lessons: 24, duration: '8 ساعات', color: 'mint', icon: 'Aa' },
  { title: 'مدخل إلى تحليل البيانات', category: 'التقنية', progress: 18, lessons: 16, duration: '5 ساعات', color: 'blue', icon: '∿' },
  { title: 'الكتابة الإبداعية', category: 'المهارات', progress: 30, lessons: 12, duration: '4 ساعات', color: 'yellow', icon: '✎' },
  { title: 'أساسيات إدارة المشاريع', category: 'الأعمال', progress: 55, lessons: 20, duration: '9 ساعات', color: 'purple', icon: '◫' },
  { title: 'التسويق بالمحتوى', category: 'التسويق', progress: 25, lessons: 10, duration: '3 ساعات', color: 'orange', icon: '◎' },
]

export const lessonTopics: Record<string, string[]> = {
  'أساسيات تجربة المستخدم': ['مقدمة إلى تجربة المستخدم', 'البحث مع المستخدمين', 'بناء الشخصيات والرحلات', 'النماذج الأولية', 'اختبار قابلية الاستخدام'],
  'الإنجليزية للمحادثة': ['مراجعة أساسيات المحادثة', 'مفردات الحياة اليومية', 'جلسة استماع تفاعلية', 'محادثة مع زميل'],
  'مدخل إلى تحليل البيانات': ['ما هو تحليل البيانات', 'الأدوات الأساسية', 'قراءة الجداول', 'تنظيف البيانات'],
  'الكتابة الإبداعية': ['مدخل إلى الكتابة', 'وصف المشاهد', 'بناء الشخصيات', 'تحرير النص'],
  'أساسيات إدارة المشاريع': ['دورة حياة المشروع', 'التخطيط والجدولة', 'إدارة المخاطر', 'التواصل الفعال'],
  'التسويق بالمحتوى': ['استراتيجية المحتوى', 'كتابة المحتوى', 'قنوات التوزيع', 'قياس الأداء'],
}

export const FALLBACK_LESSONS = ['مقدمة إلى الدورة', 'المفاهيم الأساسية', 'تطبيق عملي', 'مراجعة وتقييم']

export const exploreCourses: ExploreCourse[] = [
  { title: 'أساسيات تجربة المستخدم', category: 'التصميم', level: 'مبتدئ', progress: 0, lessons: 18, duration: '6 ساعات', students: '2.4k', rating: '4.9', color: 'explore-coral', icon: '✦' },
  { title: 'الإنجليزية للمحادثة', category: 'اللغات', level: 'متوسط', progress: 0, lessons: 24, duration: '8 ساعات', students: '4.8k', rating: '4.8', color: 'explore-mint', icon: 'Aa' },
  { title: 'مدخل إلى تحليل البيانات', category: 'التقنية', level: 'مبتدئ', progress: 0, lessons: 16, duration: '5 ساعات', students: '1.8k', rating: '4.7', color: 'explore-blue', icon: '∿' },
  { title: 'الكتابة الإبداعية', category: 'المهارات', level: 'متوسط', progress: 0, lessons: 12, duration: '4 ساعات', students: '950', rating: '4.9', color: 'explore-yellow', icon: '✎' },
  { title: 'أساسيات إدارة المشاريع', category: 'الأعمال', level: 'متقدم', progress: 0, lessons: 20, duration: '9 ساعات', students: '3.1k', rating: '4.8', color: 'explore-purple', icon: '◫' },
  { title: 'التسويق بالمحتوى', category: 'التسويق', level: 'مبتدئ', progress: 0, lessons: 10, duration: '3 ساعات', students: '1.2k', rating: '4.6', color: 'explore-orange', icon: '◎' },
]

export const categories = ['كل الدورات', 'التصميم', 'التقنية', 'اللغات', 'الأعمال', 'المهارات', 'التسويق']