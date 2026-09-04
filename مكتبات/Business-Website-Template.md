# 🎨 مكتبة Business Website Template (HooBank) — وثيقة مرجعية محفوظة

> أُنشئت بتاريخ: 2026-08-29 — نوع المرجع: قالب موقع أعمال (Business) React+Tailwind

---

## 🔗 الروابط الرسمية

| العنصر | الرابط |
|---|---|
| **GitHub (المستودع)** | `https://github.com/itsDaiton/business-website-template` |
| **المعاينة الحية** | `https://business-website-template.onrender.com/` |
| **الترخيص** | MIT ✔ |
| **الإحصائيات** | 340 نجمة · 166 fork · 17 commit |

---

## 📌 ما هو؟

**HooBank** — قالب موقع أعمال (Business Website Template) حديث ومتجاوب (responsive)، مبني بـ **React + Tailwind CSS**.
تصميم مستوحى من مشروع **JavaScript Mastery** (Figma أصلي + فيديو تعليمي).

> ⚠️ جميع الأسماء والمعلومات والأصول **وهمية** ولا تمثل شركة حقيقية — مناسبة للتجربة والتركيب كقالب.

## 🧰 التقنيات (Built With)
- **React.js**
- **Tailwind CSS**
- **Vite** (أداة البناء)

## 📐 التخطيط (Layout) — الأقسام
1. Header (الترويسة)
2. Hero section (قسم البطل)
3. Features section (المميزات)
4. Billing section (الفواتير/التسعير)
5. Product showcase section (عرض المنتج)
6. Testimonials section (آراء العملاء)
7. Clients section (العملاء/الشركاء)
8. Call to action section (دعوة لاتخاذ إجراء)
9. Footer (التذييل)

فلسفة شائعة لمواقع الشركات: ترويسة → Hero → مميزات → عرض المنتج → آراء → عملاء → CTA → فوتر.

## 🧩 بنية المجلدات
```
src/                 ← كود React
public/              ← أصول ثابتة
index.html
package.json / package-lock.json
tailwind.config.cjs  ← إعداد Tailwind
postcss.config.cjs
vite.config.js       ← إعداد Vite
```

## 🚀 التثبيت والتشغيل
```bash
git clone https://github.com/itsDaiton/business-website-template.git
cd business-website-template
npm install
npm run dev        # تشغيل خادم التطوير (Vite)
npm run build      # بناء للإنتاج
```

---

## ✅ ملاحظة عملية لاستخدامي
- **قالب موقع أعمال** جاهز ومشهود له (340+ نجمة) بتصميم معاصر، مثالي لمن يريد موقع شركة/نشاط تجاري سريع بـ React+Tailwind.
- في سياق واجهات `واجهات` العربية، عند طلب "موقع شركة"، أعرّب هذا التخطيط (Header/Hero/Features/Billing/Showcase/Testimonials/Clients/CTA/Footer) مع خطوط عربية — مثل صفحة الهبوط العربية `01-landing-page.html` التي بنيتها سابقاً.
- يتطلب Node.js/npm. لا يستخدم مكتبات خارجية ثقيلة (بدون Framer/Lottie).
