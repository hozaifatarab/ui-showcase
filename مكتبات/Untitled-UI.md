# 🎨 مكتبة Untitled UI — وثيقة مرجعية محفوظة
> أُنشئت بتاريخ: 2026-08-29 — نوع المرجع: Figma Kit + مكتبة مكوّنات React/Tailwind
> الموقع: `https://www.untitledui.com` | المستودع/الوثائق: `docs.untitledui.com`

---

## Name
**Untitled UI** — "The world's largest collection of React components" بالإضافة إلى *ultimate Figma UI kit*.

## Provides
- **Untitled UI Figma** — UI kit كامل للـ Figma (FREE kickstart + PRO variables/styles).
- **Untitled UI React** — مكتبة مكوّنات React (Tailwind CSS + React Aria).
- **Untitled UI Icons** — 4,600+ أيقونة نظيفة/محايدة (1,100+ SVG مجانية).
- **Untitled UI Avatars** — 370+ صورة مستخدم نائبة مجانية.
- **Untitled UI Logos** — 180+ شعار شركة مجاني.
- مجتمع: **380,000+ مصمم** (في Figma).
- Blog يركّز على vibe/AI coding (Cursor · Claude Code · v0 · Bolt · Lovable).

## Version
- **v8.0** — "100s new + improved components"؛ يدعم **Tailwind CSS v4.2 color palette**.

## Categories
- **Figma:** Hero, Navbar, Cards, Forms, Tables, Dashboard pages, Authentication, Settings, E-commerce (page examples).
- **React:** نفس الفئات — Buttons, Forms, Navigation, Cards, Tables, Layouts, Dashboards, Modals.
- **Icons:** UI / نظام / علامات / وسائط.
- (التصنيفات المحددة ليست مدرجة تفصيلياً في هذه الصفحة؛ مشتقة من الوصف العام).

## Tokens
- **الخط:** Inter (افتراضي) — يدعم Google Fonts.
- **الألوان:** Tailwind CSS v4.2 color palette — semantic color roles.
- **المسافاة:** نظام **4px grid** (Tailwind `space-*` scale). ✅ متوافق مع `--space-*` في `واجهات`.
- **الزوايا:** Tailwind `rounded-{sm,md,lg,xl,2xl…}`.
- **الظلال:** Tailwind `shadow-{sm,DEFAULT,lg,xl,2xl}`.
- **التفاعل:** Tailwind variants (hover/focus/active/disabled).
- التوكنات تُعرّف داخل `tailwind.config` — سهل نقلها إلى tokens `--md-*` كما مطبق في الواجهات.

## Installation
- **Figma kit:** Kickstart FREE — PRO Variables/Styles مدفوع عبر "Buy now".
- **React (Tailwind + React Aria):** عبر npm — انظر `docs.untitledui.com`. أسماء الحزم: `@untitled-ui/react`، `@untitled-ui/icons`، `@untitled-ui/avatars` (غير مؤكدة من هذه الصفحة).
- **Icons:** SVG مباشرة (copy) أو حزمة npm.
- ⚠️ أوامر التثبيت الدقيقة غير مرئية في هذه الصفحة — صُممت الوثيقة على ما هو مرئي فقط.

## License / Pricing
- **Figma kit:** Freemium — Kickstart (FREE) + PRO (مدفوع: Variables/Styles).
- **React components:** مدفوع (PRO).
- **Icons / Avatars / Logos:** FREE.
- خصم طلابي 50%، برنامج أفيانيات 30%.
- **EULA / License / DPA / Security** متوفرة — Untitled UI® علامة مسجلة، غير مرتبطة/مُعتمدة من Figma.
- (الترخيص غير MIT حرّ؛هو تجاري للـ PRO).

## Accessibility
- مكوّنات React مبنية على **React Aria** → أساسيات إتاحة مدمجة (Focus management، keyboard navigation، ARIA roles).
- (مطاليات إتاحة محددة غير مذكورة في الصفحة؛ الأسلوب يعتمد على React Aria كحجر الزاوية).

## استخدامي
- يدعام تماماً مع **جسر التوكنات M3** في `واجهات`:
  - استبدل palette الخاص به بـ `--md-*` color roles (Primary/Secondary/Surface/Outline).
  - استورد أيقوناته المجانية (SVG) بدلاً من بناء مكتبة أيقونات.
  - استخدم Layout/Page Examples كقوالب بنية — مشابه مرجع HooBank (المرجع 6).
  - مناسب vibe/AI coding — ظهر في مدونته (Cursor, Claude Code, v0, Bolt).
