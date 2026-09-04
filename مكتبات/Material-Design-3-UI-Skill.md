# 🎨 مكتبة Material Design 3 UI/UX Skill — وثيقة مرجعية محفوظة

> أُنشئت بتاريخ: 2026-08-29 — نوع المرجع: مكتبة تصميم (Agent Skill)

---

## 🔗 الروابط الرسمية

| العنصر | الرابط |
|---|---|
| **GitHub (المستودع)** | `https://github.com/skydashnet/material-design-3-ui-skill` |
| **نظام التصميم الرسمي** | `https://m3.material.io` |
| **الترخيص** | MIT ✔ (مشروع مجتمعي غير تابع لـ Google) |
| **الإصدار** | v1.1.0 |

---

## 📌 ما هي؟

**Agent Skill** قابلة لإعادة الاستخدام تساعد مساعدي الذكاء الاصطناعي على إنشاء ومراجعة وتنفيذ واجهات وفق:
- **Material Design 3** (M3)
- **Material You**
- **Material 3 Expressive** (اختياري)

شعار المشروع: *"Design the system, not just the screenshot"* — إنه **نظام قرارات (decision system)** للمساعد الذكي، وليس مجرد قوالب جميلة.

## 🤖 المنصات المدعومة (7 وكلاء)
Claude Code · OpenAI Codex · Google Antigravity · Kiro · OpenCode · Hermes Agent · OpenClaw
(يركّب على Windows و macOS و Linux)

---

## 🚀 التثبيت السريع

**macOS / Linux:**
```bash
curl -fsSL https://raw.githubusercontent.com/skydashnet/material-design-3-ui-skill/main/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://raw.githubusercontent.com/skydashnet/material-design-3-ui-skill/main/install.ps1 | iex
```

> المثبّت يوزّع نفس حزمة المهارة إلى المواقع العالمية للمساعدين المدعومين. **لا يثبّت أو يضبط أو يشغّل أي وكيل AI.**

---

## ✨ ما الذي تغيّره هذه المهارة؟

| بدون مهارة تصميم | مع `material-design-3-ui` |
|---|---|
| "خليها شكل Material" | تبدأ من هدف المستخدم والتسلسل الهرمي والدلالات |
| بطاقات مستديرة في كل مكان | الاستخدام (containment) فقط عندما يكون له غرض |
| مكوّنات تُختار بالشكل | مكوّنات تُختار بالسلوك |
| ألوان hex عشوائية | أدوار ألوان دلالية ورموز (tokens) |
| واجهة الجوال تُمدد لسطح المكتب | بنية تكيفية حسب النافذة المتاحة |
| الوصولية تُفحص بالنهاية | الوصولية شرط إلزامي للإطلاق |
| "Expressive" تعني مزيد زخرفة | تعبير يُستخدم بانتقائية لتقوية التسلسل |

## 🎯 أبرز الميزات
- **Progressive disclosure** — `SKILL.md` موجز يوجّه الوكيل إلى 13 مرجعاً مركزاً عند الحاجة فقط.
- **قواعد مكوّنات دلالية** — أزرار، FAB، chips، تنقّل، نماذج، تغذية راجعة، أسطح… تُختار حسب الغرض.
- **تكيفي بطبيعته** — من النوافذ المدمجة حتى كبيرة جداً، تخطيطات متعددة الألواح، قابلة للطي، إعادة التحجيم، edge-to-edge.
- **الوصولية أولاً** — تباين، أهداف لمس، تركيز، لوحة مفاتيح، دلالات (semantics)، تكبير نص، توطين، reduced motion.
- **M3 Expressive بضبط** — لون، شكل، حجم، حركة، containment، طباعة تُستخدم بقصد.
- **توزيع متعدد الوكلاء** — حزمة واحدة لـ 7 مساعدين.
- **فحوصات انحدار** — تحقق ثابت + حالات تقييم سلوكية.

---

## 📂 بنية المستودع
```
├── SKILL.md          ← موجّه الوكيل (المدخل)
├── references/       ← 13 مرجعاً مركزاً (توجيهات تفصيلية)
├── tests/            ← فحوصات انحدار وتقييم
├── install.sh / install.ps1  ← المثبّتات
├── skill-files.txt
├── README.md
└── LICENSE (MIT)
```

## 📐 أساس التصميم (Source of Truth)
مبني على الوثائق الرسمية من Material Design و Android:
- Material Design 3، مكوّنات M3، أدوار الألوان، الطباعة (Typography)، رموز التصميم (Design Tokens)
- استخدامية ووصولية Material
- M3 Expressive + أبحاث Google Design
- Material 3 in Jetpack Compose، Adaptive Window Size Classes، Canonical Adaptive Layouts

> ⚠️ عندما يتعارض هذا المستودع مع المواصفة الرسمية الحالية، **المواصفة الرسمية هي التي تفوز**.

## 🧭 ملاحظات المنصات
- **Android / Jetpack Compose:** تفضّل إرشادات `androidx.compose.material3` الحالية، أدوار الثيم الدلالية، التوافقيات التكيفية، الـ edge-to-edge، وواجهات برمجية مستقرة للإنتاج.
- **الويب والمنصات الأخرى:** الحفاظ على دلالات M3 (التسلسل، الهرمية، tokens، منطق التفاعل، الوصولية) دون تكرار تفاصيل تطبيق Android حرفياً.
- `SKILL.md` يوجّه الوكيل للتحقق من الوثائق الرسمية الحالية قبل تأكيد إصدارات المكتبات أو توفّر واجهات M3 Expressive الأحدث.

## ✅ ملاحظة عملية لاستخدامي
عند طلب تصميم بهوية Material (أو واجهات تطبيقات/أندرويد/Web مبنية على M3)، أستخدم هذا المرجع كقاعدة قرارات، مع الرجوع إلى وثائق m3.material.io الرسمية. التثبيت عبر `install.ps1` في Windows.
