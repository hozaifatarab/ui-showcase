# 🎨 مكتبة Parth Personal Portfolio — وثيقة مرجعية محفوظة

> أُنشئت بتاريخ: 2026-08-29 — نوع المرجع: قالب محفظة شخصية للمطوّر (بوابة Portfolio)

---

## 🔗 الروابط الرسمية

| العنصر | الرابط |
|---|---|
| **GitHub (المستودع)** | `https://github.com/mittal-parth/personal-portfolio` |
| **المعاينة الحية** | `https://parthmittal.netlify.app/` |
| **الترخيص** | مفتوح المصدر (Code of Conduct) |
| **الإحصائيات** | 177 نجمة · 154 fork · 134 commit |

---

## 📌 ما هو؟

قالب **محفظة شخصية احترافية للمطوّر** (The only developer portfolio template) بتصميم UI/UX عصري.
أبرز ما يميزه: **استيراد بياناتك مباشرة من LinkedIn** للبدء بسرعة ⚡️.

## 🧰 التقنيات (Tech Stack)
- **ReactJS** + **Tailwind CSS** (البنية الأساسية)
- **ViteJS** — بناء وتشغيل
- **React Icons** — الأيقونات
- **Framer Motion** — الحركات والانتقالات
- **React Lottie** — رسوم متحركة (Lottie)
- **Meraki UI** — مكوّنات واجهة
- **Cypress** — اختبارات E2E
- **Netlify** — استضافة/نشر + دالة خادم

## ✅ الأقسام المُنفَّذة
1. Hero Section
2. Skills & Experience (المهارات والخبرة)
3. Education (التعليم)
4. Projects (المشاريع)
5. Blogs (المدونات)
6. Open Source Contributions (مساهمات مفتوحة المصدر)
7. Extra Curricular (الأنشطة)
8. Contact Me (التواصل)

## ✨ الميزات الرئيسية
- **استيراد بيانات LinkedIn (Beta):** نموذج استيراد بياناتك مع اختبارات (`snippets/test_bulk_import.py`).
- **استخدام كقالب (theme):** ركّز على تعديل البيانات بدل إعادة البناء.
- حركات Lottie و Framer Motion لمظهر حيوي.
- مهيأ لنشر Netlify مع متغيرات بيئية.

---

## 🧑‍💻 التثبيت والتشغيل
```bash
# 1) Fork + clone المستودع
git clone https://github.com/mittal-parth/personal-portfolio.git
cd personal-portfolio

# 2) تثبيت الحزم
npm install

# 3) متغيرات البيئة (.env في جذر المشروع)
#    مثال: VITE_GH_TOKEN=YOUR_GITHUB_TOKEN

# 4) تشغيل خادم التطوير (Netlify)
npx netlify dev
```

### الاختبارات (Cypress E2E)
```bash
npm run cypress:open   # تفاعلي
npm run cypress:run    # headless
# اختبار استيراد LinkedIn:
python3 -m unittest snippets/test_bulk_import.py
```

### للنشر
استخدم **Netlify** (أضف متغيرات البيئة من واجهة Netlify أيضاً).

---

## 🖼️ المصادر والإلهام
JavaScript Mastery · Developerfolio · MasterPortfolio
رسوم Lottie: Coding (Yamesh Sai Balaji) · Quiz Mode (SenecaDan)

## 🧩 بنية المجلدات البارزة
```
src/        ← كود React
snippets/   ← أدوات (نصوص) مثل اختبار الاستيراد
public/     ← أصول ثابتة
cypress/    ← اختبارات E2E
netlify/    ← دوال/serverless Netlify
```

---

## ✅ ملاحظة عملية لاستخدامي
- **قالب جاهز ومكتمل** React+Tailwind لموقع محفظة شخصية، مناسب لمن يريد إطلاق موقع سريع ويملك بيانات LinkedIn.
- في سياق **واجهات مجلد `واجهات`** العربيّة التي نبنيها، توجد بالفعل واجهة محفظة شخصية عربية (`04-portfolio.html` بأسلوب Reem Kufi + Mint). هذا المرجع يفيد كـ **مرجع بنية أقسام** (Hero/Skills/Projects/Blogs/Contact) وأسلوب React+Tailwind لو أراد المستخدم نسخة تطبيق كاملة.
- يتطلب Node.js/npm لتشغيله (ليس ملف HTML واحد). لا يستخدم متغيرات بيئية أو استيراد LinkedIn إلا عند تطویره فعلياً.
