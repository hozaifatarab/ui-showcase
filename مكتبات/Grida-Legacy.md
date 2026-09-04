# 🎨 مكتبة Grida (Legacy) — وثيقة مرجعية محفوظة

> أُنشئت بتاريخ: 2026-08-29 — نوع المرجع: محرر تصميم مفتوح المصدر (Archived)

---

## 🔗 الروابط الرسمية

| العنصر | الرابط |
|---|---|
| **GitHub (المستودع)** | `https://github.com/gridaco/legacy` |
| **المستودع الأصلي** | `https://github.com/gridaco/grida` |
| **الموقع الرسمي** | `https://grida.co` |
| **الترخيص** | Apache-2.0 ✔ |

---

## ⚠️ تنبيه مهم — حالة المستودع

- **Archived (مؤرشف):** أُوقف المستودع من قِبل المالك بتاريخ **14 ديسمبر 2023** وأصبح **read-only** (للقراءة فقط).
- الاسم `legacy` يشير إلى أنه نسخة قديمة من المشروع الرئيسي **Grida** (المستودع الأصلي `grida.co/grida`).
- **139 نجمة · 11 fork · 1,807 commit** — لم يعد متلقيًا للتحديثات.

---

## 📌 ما هو؟

**Grida** (المعروف سابقاً باسم **Bridged 2022**): محرر تصميم واجهات **مفتوح المصدر** ومتزامن لحظياً، مبني على **WASM**، مصمم خصيصاً لتصميم وتطوير تطبيقات المنتجات. الفلسفة:
- **Developer-first** (موجّه للمطوّرين أولاً)
- محرّك (Engine) API و **Plugin SDK** مرتبطان 1:1 مباشرة على **كود الإنتاج**
- يهدف إلى **سَدّ الفجوة بين التصميم والتطوير** (Design-to-Code)

## 🛠️ التقنيات الأساسية (Engine & Foundation)
- مبني على **Skia graphics library** (Canvaskit WASM)
- نواة UI بتبع **نظام تصميم Reflect** 
- سطح المحرر مبني على **React**

## 🎯 البنية المعيارية (Packages & Modules)

| الوحدة | الوظيفة | المستودع |
|---|---|---|
| **nothing** | محرك رسوميات (رسم فقط — كل شيء قابل للرسم) | gridaco/nothing |
| **reflect-editor-ui** | إطار واجهة المحرر لـ React (مستوى مؤسسات) | reflect-ui/reflect-editor-ui |
| **reflect-ui-react** | مكوّنات reflect لـ React | reflect-ui/reflect-ui-react |
| **reflect-core-ts** | تعريفات reflect الأساسية على TypeScript | reflect-ui/reflect-core |
| **design-sdk** | غلاف موحد لبناء إضافات Figma/Sketch/Studio | gridaco/design-sdk |
| **design-file-converter** | تحويل تصميمات Sketch/Figma/XD ↔ Grida | gridaco/design-file-converter |
| **design-server** | خادم تعاون حيّ (real-time collaboration) | gridaco/design-server |
| **base / base-sdk-ts** | خدمات Bridged App (بيانات/حسابات) | bridgedxyz/base |
| **boring** | محرر نصوص (مثل Notion) حر ومفتوح | gridaco/boring |
| **design-to-code** | محرك "من التصميم إلى الكود" | gridaco/design-to-code |

## 🧭 مفاهيم تصفية للفجوة بين التصميم والتطوير
Theme support · Responsive layout · Linting · Grid · List · Slots · States · Git · Variables · Data layer · Logic layer · **Design to code** · نظام تصميم قاعدة Reflect

## ✨ الأوضاع والميزات الرئيسية
presentation · developer · graphics · designer · product · prototype · documentation · diagram (EDR) · **تحرير تعاوني حيّ** · version control داخل الأداة · responsive mode · visual engine · context engine · Scriptable (بـ JS/TS SDK و add-ons)

## 🧰 البناء من المصدر (للمشروع الأصلي grida)
```sh
git clone --recurse-submodules https://github.com/gridaco/grida.git
cd grida
yarn
yarn desktop   # تشغيل كتطبيق سطح مكتب (Electron)
# أو
yarn web       # تشغيل كتطبيق ويب
# تحديث: git submodule update --init --recursive
```

## ✅ ملاحظة عملية لاستخدامي
المشروع **مؤرشف ولا يُطوَّر** — مناسب كمرجع/إلهام لبنية "أدوات تصميم تعتمد سكيا وواجهات React وتعاون حيّ"، لكنه **غير مؤهَّل** كمكتبة تصميم جاهزة للواجهات (لهذا الغرض الأفضل مكتبتا **UI UX Pro Max** و **Material Design 3** المحفوظتان سابقاً). أي نص يُبنى منه لا يتبنى OSS جديدة.
