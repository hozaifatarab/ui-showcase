<div align="center">

# مَدار — منصة تعلّم عربية

**مساحة تعلّمك القادمة** — واجهة عربية كاملة (RTL) لمنصة تعلّم إلكتروني: لوحة معلومات، استكشاف دورات، مكتبة شخصية، جدول أسبوعي، وإنجازات.

[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-7-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## ✨ المزايا

- **لوحة المعلومات**: تحية حسب الوقت، إحصاءات تعلّم، متابعة الدورة الحالية، خطة يومية، إنجازات
- **استكشف الدورات**: بحث + تصفية حسب التصنيف والمستوى، بطاقات بتقييمات وعدد الطلاب
- **مكتبتي**: حفظ الدورات في `localStorage` (مفتاح `madar-library`) مع حالة فارغة أنيقة
- **نافذة الدرس**: حصار تركيز (Focus Trap) + استعادة التركيز عند الإغلاق + إغلاق بـ Escape
- **إشعارات وتوست**: إشعارات قابلة للقراءة/الحذف + توست عند كل إجراء
- **إمكانية الوصول**: رابط تخطٍّ، تباين WCAG AA، حد أدنى 12px للنص، احترام `prefers-reduced-motion`

## 🚀 البدء

**المتطلبات**: Node.js ≥ 20.19 · npm ≥ 10

```bash
# التثبيت
npm install

# خادم التطوير (http://localhost:5173)
npm run dev

# فحص الأنواع + بناء الإنتاج (الخرج إلى dist/)
npm run build

# معاينة البناء
npm run preview
```

## 🧰 السكربتات

| الأمر | الوظيفة |
|---|---|
| `npm run dev` | خادم التطوير مع HMR |
| `npm run build` | `tsc -b && vite build` — فحص الأنواع + البناء |
| `npm run preview` | معاينة بناء الإنتاج محليًا |
| `npm run format` | تنسيق `src/` عبر Prettier |
| `npm run check-format` | التحقق من التنسيق دون تعديل |

## 🗂️ البنية

```
src/
├── main.tsx                 # نقطة الدخول
├── App.tsx                  # التركيب + الحالة المشتركة (~168 سطرًا)
├── navigation.ts            # مفاتيح التنقل: NavKey + NAV_LABELS + NAV_GROUPS
├── types.ts                 # الأنواع المشتركة: Notice, PlanTask
├── ExplorePage.tsx          # صفحة استكشاف الدورات
├── data/
│   └── courses.ts           # المصدر الموحد للبيانات: Course, ExploreCourse
├── components/
│   ├── Sidebar.tsx          # الشريط الجانبي (العلامة + التنقل + بطاقة المرشد)
│   ├── Topbar.tsx           # البحث (⌘K / Ctrl K) + لوحة الإشعارات
│   ├── DashboardView.tsx    # لوحة المعلومات الكاملة
│   ├── LibraryView.tsx      # مكتبتي + الحذف + الحالة الفارغة
│   ├── CourseCard.tsx       # بطاقة دورة (لوحة المعلومات + المكتبة)
│   ├── CourseModal.tsx      # نافذة الدرس (حصار التركيز)
│   ├── NavItem.tsx          # زر تنقل عام
│   └── StatCard.tsx         # بطاقة إحصاء
└── index.css                # التوكنات + الأنماط (مفكوك الضغط، 1600+ سطر)
```

**مبادئ معمارية**: `App.tsx` يقتصر على التركيب والحالة — كل واجهة قابلة للاستخراج في `components/`. التنقل يتم عبر مفاتيح `NavKey` (لا سلاسل سحرية)، والبيانات تُستورد حصريًا من `data/courses.ts` (بيانات Mock ثابتة موثّقة داخل الملف).

## 🎨 نظام التصميم

جميع القيم الدلالية معرّفة كتوكنات في `:root` داخل `src/index.css` — أي لون/حجم جديد يجب أن يستخدم متغيرًا قائمًا أو يضيف توكنًا جديدًا (لا قيم مثبتة متفرقة).

### توكنات الألوان

| التوكن | القيمة | الاستخدام |
|---|---|---|
| `--ink` | `#242633` | النص الأساسي |
| `--muted` | `#6d707e` | النص الثانوي (تباين ≥ 4.5:1) |
| `--line` | `#e9eaf0` | الحدود والفواصل |
| `--violet` | `#6d5ce7` | اللون الأساسي للعلامة |
| `--violet-soft` | `#eeebff` | خلفيات البنفسج الفاتحة |
| `--coral` | `#ff876f` | لون مساعد (دافئ) |
| `--aqua` | `#48c9bd` | لون مساعد (بارد) |

### سلم الخطوط

| التوكن | القيمة | الاستخدام |
|---|---|---|
| `--text-xs` | `12px` | الحد الأدنى المسموح (ميتاداتا، وسوم) |
| `--text-sm` | `13px` | نصوص البطاقات |
| `--text-md` | `14px` | نصوص الجسم |

- الخطوط: `Noto Sans Arabic` (العربية) + `DM Sans` (اللاتينية) — تُحمّل عبر `<link rel="preconnect">` + `<link>` في `index.html` (لا `@import` حاجب للرسم).
- اتفاقية التسمية: بادئات شبه-BEM (`.explore-*`, `.modal-*`, `.course-*`, `.stat-*`).

## ♿ إمكانية الوصول (WCAG 2.1 AA)

- `dir="rtl" lang="ar"` على الجذر + رابط **تخطَّ إلى المحتوى** (`#main-content`)
- **حصار التركيز** في النافذة المنبثقة + استعادة التركيز للعنصر المطلق عند الإغلاق
- `Escape` يغلق النافذة والإشعارات وقائمة الجوال
- `aria-label` للأزرار الأيقونية، `aria-pressed` / `aria-expanded` / `aria-current` في مواضعها
- `prefers-reduced-motion`: معطّل في CSS (`transition: none`) وفي التمرير البرمجي (`scrollTo`/`scrollIntoView` تتحول إلى `auto`)
- لا نص أصغر من **12px**، وكل النصوص الثانوية تباينها ≥ **4.5:1** (مثلًا الذهب `#8a6318` بدل `#e5b958`)
- `focus-visible` واضح (3px) على كل العناصر التفاعلية

## 🧪 الأدوات والبروتوكولات

- **Prettier** (`.prettierrc`): بدون فواصل منقوطة، اقتباس مفرد، عرض 120 — فرض عبر `npm run format`
- **ESLint**: إعداد Flat Config جاهز في `eslint.config.js` — التثبيت مؤجّل لأن أحدث `typescript-eslint` يتطلب TypeScript < 6.1 بينما المشروع على TS 7 (انظر التعليق داخل الملف لخطوات التفعيل لاحقًا)
- **البناء**: `tsc -b` يفحص الأنواع صارمًا قبل Vite — لا يمرّ بناء كاسر

## 📦 المستودعات

المشروع منشور متطابقًا على:

| المستودع | الرابط |
|---|---|
| منصة-أفق | `github.com/hozaifatarab/afaq` |
| معرض الواجهات | `github.com/hozaifatarab/ui-showcase` |

