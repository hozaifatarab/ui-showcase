import { useMemo, useState } from 'react'
import { ArrowLeft, BookOpen, Clock3, Filter, Play, Search, Star, Users } from 'lucide-react'
import { categories, exploreCourses } from './data/courses'

type ExplorePageProps = {
  query: string
  onNotify: (message: string) => void
  library: string[]
  onToggleLibrary: (title: string) => void
}

export default function ExplorePage({ query, onNotify, library, onToggleLibrary }: ExplorePageProps) {
  const [category, setCategory] = useState('كل الدورات')
  const [level, setLevel] = useState('كل المستويات')

  const visibleCourses = useMemo(
    () =>
      exploreCourses.filter(
        (course) =>
          (category === 'كل الدورات' || course.category === category) &&
          (level === 'كل المستويات' || course.level === level) &&
          (!query || course.title.includes(query) || course.category.includes(query)),
      ),
    [category, level, query],
  )

  return (
    <div className="explore-page">
      <section className="explore-hero">
        <div>
          <p className="eyebrow">مكتبة مَدار التعليمية</p>
          <h1>اكتشف ما يحرّك فضولك</h1>
          <p>دورات عملية صممت لتمنحك معرفة تستطيع استخدامها من اليوم.</p>
        </div>
        <div className="hero-stamp">
          <BookOpen size={25} />
          <strong>+120</strong>
          <span>دورة منتقاة</span>
        </div>
      </section>

      <div className="explore-toolbar">
        <div className="category-tabs">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? 'active' : ''}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="level-select">
          <Filter size={15} />
          <select
            aria-label="تصفية الدورات حسب المستوى"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          >
            <option>كل المستويات</option>
            <option>مبتدئ</option>
            <option>متوسط</option>
            <option>متقدم</option>
          </select>
        </label>
      </div>

      <div className="explore-heading">
        <div>
          <h2>دورات مقترحة لك</h2>
          <p>{visibleCourses.length} دورات متاحة حسب اختياراتك</p>
        </div>
        <button type="button" className="text-btn" onClick={() => onNotify('تم تحديث قائمة الدورات')}>
          تحديث الاقتراحات <ArrowLeft size={17} />
        </button>
      </div>

      <div className="explore-grid">
        {visibleCourses.map((course) => {
          const inLibrary = library.includes(course.title)
          return (
            <article className="explore-card" key={course.title}>
              <div className={`explore-art ${course.color}`}>
                <span>{course.icon}</span>
                <button
                  type="button"
                  aria-label={`تشغيل معاينة ${course.title}`}
                  onClick={() => onNotify(`تشغيل معاينة ${course.title}`)}
                >
                  <Play size={16} fill="currentColor" />
                </button>
              </div>
              <div className="explore-card-body">
                <div className="explore-card-top">
                  <span>{course.category}</span>
                  <strong>
                    <Star size={13} fill="currentColor" /> {course.rating}
                  </strong>
                </div>
                <h3>{course.title}</h3>
                <div className="explore-meta">
                  <span>
                    <Clock3 size={14} /> {course.duration}
                  </span>
                  <span>
                    <Users size={14} /> {course.students}
                  </span>
                  <b>{course.level}</b>
                </div>
                <button
                  type="button"
                  className={`outline-btn ${inLibrary ? 'added' : ''}`}
                  onClick={() => onToggleLibrary(course.title)}
                >
                  {inLibrary ? 'موجودة في مكتبتك' : 'أضف إلى مكتبتي'} <ArrowLeft size={15} />
                </button>
              </div>
            </article>
          )
        })}
      </div>

      {visibleCourses.length === 0 && (
        <div className="empty-state">
          <Search size={22} />
          <strong>لم نجد دورة بهذا البحث</strong>
          <span>جرّب كلمة أخرى أو اختر تصنيفًا مختلفًا.</span>
        </div>
      )}
    </div>
  )
}
