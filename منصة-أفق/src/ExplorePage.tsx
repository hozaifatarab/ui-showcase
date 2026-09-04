import { useState } from 'react'
import { ArrowLeft, BookOpen, Clock3, Filter, Play, Search, Star, Users } from 'lucide-react'

type ExploreCourse = { title: string; category: string; level: string; duration: string; students: string; rating: string; color: string; icon: string }

const exploreCourses: ExploreCourse[] = [
  { title: 'أساسيات تجربة المستخدم', category: 'التصميم', level: 'مبتدئ', duration: '6 ساعات', students: '2.4k', rating: '4.9', color: 'explore-coral', icon: '✦' },
  { title: 'الإنجليزية للمحادثة', category: 'اللغات', level: 'متوسط', duration: '8 ساعات', students: '4.8k', rating: '4.8', color: 'explore-mint', icon: 'Aa' },
  { title: 'مدخل إلى تحليل البيانات', category: 'التقنية', level: 'مبتدئ', duration: '5 ساعات', students: '1.8k', rating: '4.7', color: 'explore-blue', icon: '∿' },
  { title: 'الكتابة الإبداعية', category: 'المهارات', level: 'متوسط', duration: '4 ساعات', students: '950', rating: '4.9', color: 'explore-yellow', icon: '✎' },
  { title: 'أساسيات إدارة المشاريع', category: 'الأعمال', level: 'متقدم', duration: '9 ساعات', students: '3.1k', rating: '4.8', color: 'explore-purple', icon: '◫' },
  { title: 'التسويق بالمحتوى', category: 'التسويق', level: 'مبتدئ', duration: '3 ساعات', students: '1.2k', rating: '4.6', color: 'explore-orange', icon: '◎' },
]

const categories = ['كل الدورات', 'التصميم', 'التقنية', 'اللغات', 'الأعمال', 'المهارات']

export default function ExplorePage({ query, onNotify }: { query: string; onNotify: (message: string) => void }) {
  const [category, setCategory] = useState('كل الدورات')
  const [level, setLevel] = useState('كل المستويات')
  const visibleCourses = exploreCourses.filter((course) => (category === 'كل الدورات' || course.category === category) && (level === 'كل المستويات' || course.level === level) && (!query || course.title.includes(query) || course.category.includes(query)))

  return <div className="explore-page"><section className="explore-hero"><div><p className="eyebrow">مكتبة مَدار التعليمية</p><h1>اكتشف ما يحرّك فضولك</h1><p>دورات عملية صممت لتمنحك معرفة تستطيع استخدامها من اليوم.</p></div><div className="hero-stamp"><BookOpen size={25} /><strong>+120</strong><span>دورة منتقاة</span></div></section><div className="explore-toolbar"><div className="category-tabs">{categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="level-select"><Filter size={15} /><select value={level} onChange={(event) => setLevel(event.target.value)}><option>كل المستويات</option><option>مبتدئ</option><option>متوسط</option><option>متقدم</option></select></label></div><div className="explore-heading"><div><h2>دورات مقترحة لك</h2><p>{visibleCourses.length} دورات متاحة حسب اختياراتك</p></div><button className="text-btn" onClick={() => onNotify('تم تحديث قائمة الدورات')}>تحديث الاقتراحات <ArrowLeft size={17} /></button></div><div className="explore-grid">{visibleCourses.map((course) => <article className="explore-card" key={course.title}><div className={`explore-art ${course.color}`}><span>{course.icon}</span><button aria-label={`تشغيل معاينة ${course.title}`} onClick={() => onNotify(`تشغيل معاينة ${course.title}`)}><Play size={16} fill="currentColor" /></button></div><div className="explore-card-body"><div className="explore-card-top"><span>{course.category}</span><strong><Star size={13} fill="currentColor" /> {course.rating}</strong></div><h3>{course.title}</h3><div className="explore-meta"><span><Clock3 size={14} /> {course.duration}</span><span><Users size={14} /> {course.students}</span><b>{course.level}</b></div><button className="outline-btn" onClick={() => onNotify(`أضيفت دورة ${course.title} إلى مكتبتك`)}>أضف إلى مكتبتي <ArrowLeft size={15} /></button></div></article>)}</div>{visibleCourses.length === 0 && <div className="empty-state"><Search size={22} /><strong>لم نجد دورة بهذا البحث</strong><span>جرّب كلمة أخرى أو اختر تصنيفًا مختلفًا.</span></div>}</div>
}
