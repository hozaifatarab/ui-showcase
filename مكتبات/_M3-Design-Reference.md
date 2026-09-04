# 📚 مرجع موحد — مكتبات التصميم المحفّظة + نظام M3
> محدّث: 2026-08-29 | المجلد: `واجهات/مكتبات/`
> يجمع هذا الملف الـ 6 مكتبات مرجعية المحفوظة + **خريطة توكنات M3 ↔ خارجيات** لإعادة الاستخدام.

---

## فهرس المكتبات

| # | الاسم | النوع | الترخيص | الحالة | ملف المرجع |
|---|---|---|---|---|---|
| 1 | **UI UX Pro Max** | AI Skill (ذكاء تصميم) | MIT | ✅ نشط | `UI-UX-Pro-Max.md` |
| 2 | **Material Design 3 UI Skill** | Agent Skill (نظام قرارات) | MIT | ✅ نشط | `Material-Design-3-UI-Skill.md` |
| 3 | **Grida (Legacy)** | محرر تصميم WASM (React) | Apache-2.0 | ⚠️ مؤرّش | `Grida-Legacy.md` |
| 4 | **Syrian Seoge** | أداة تبديل خط Windows | MIT | ❌ غير ويبّي | `SyrianSegoe.md` |
| 5 | **Parth Personal Portfolio** | قالب React+Tailwind | Open-source | 🎯 مرجع بنية | `Personal-Portfolio.md` |
| 6 | **Business Website Template (HooBank)** | قالب React+Tailwind | MIT | 🎯 مرجع بنية | `Business-Website-Template.md` |
| 7 | **Untitled UI** | Figma Kit + React/Tailwind | Freemium/Paid (PRO) | 🎯 tokens + أيقونات | `Untitled-UI.md` |

---

## 1) UI UX Pro Max
- **المستودع:** `github.com/nextlevelbuilder/ui-ux-pro-max-skill` — v2.13.0+ (v2.0 أضاف Design System Generator)
- AI Skill تُثبّت داخل عوامل الذكاء (Claude Code · Cursor · Windsurf · Codex · Kiro · Trae …).
- **قاعدة البيانات:** 84 نمط UI · 192 تخطيط ألوان · 74 توأمة خطوط · 25 نوع مخطط · 192 قاعدة استدلال · 22 إطار.
- **الميزة v2.0 — Design System Generator:** يحلّل متطلبات مشروعك ويولّد نظام تصميم كامل (Patterns، CTA، Sections، Colors…) في ثوانٍ.
- **CLI:** `npx ui-ux-pro-max-cli init --ai claude` ثم `python .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS" --domain style --json`
- **استخدامي:** المرجع الرئيسي لقرارات التصميم والـ UI patterns في مجلد `واجهات`. لا يُستورد كحزمة — يُعامل كمصدر قرارات.

## 2) Material Design 3 UI Skill
- **المستودع:** `github.com/skydashnet/material-design-3-ui-skill` — v1.1.0 · MIT
- Agent Skill تبني واجهات **M3 / Material You / Expressive**.
- **7 وكلاء مدعومة:** Claude Code · Codex · Antigravity · Kiro · OpenCode · Hermes · OpenClaw.
- **مصدر الحقيقة:** `m3.material.io` + Android Jetpack Compose (`material3`) + Adaptive Window Size Classes + Canonical Adaptive Layouts.
- التثبيت: `curl -fsSL …install.sh | bash` (macOS/Linux) — `irm …install.ps1 | iex` (Windows). المثبّت لا يثبت أي عامل AI.
- **استخدامي:** قاعدة قرارات M3 → الـ tokens `--md-*` الموحدة في كل واجهة.

## 3) Grida (Legacy)
- **مؤرّش ١٤/١٢/٢٠٢٣ — read-only** · Apache-2.0 · 139 نجمة.
- محرّك WASM (Skia/Canvaskit) + Reflect design engine + React UI.
- **الوحدات:** `nothing` (رسم) · `reflect-editor-ui` · `reflect-core-ts` · `design-sdk` · `design-server` · `design-to-code`.
- البناء من المصدر: `git clone --recurse-submodules https://github.com/gridaco/grida && yarn desktop`.
- **استخدامي:** إلهام فق عن بنية "أداة تصميم تعتمد Skia + React + تعاون حيّ". غير مناسب للصفحات كـ HTML ثابت.

## 4) Syrian Seoge
- `github.com/SyrianTurk/SyrianSegoe` — MIT · **أداة Windows ليست مكتبة ويب**.
- تستبدل `Segoe UI` بنسخة معدّلة عبر FontForge → توافق UI كامل على UWP/شريط مهام/الإعدادات.
- **خطوط مدعومة:** لاتيني `SF Pro / MiSans / Ubuntu / Instagram Sans` · عربي `SF Arabic / Noto Naskh Arabic / Cairo`.
- يتطلّب التشغيل كمسؤول + Reboot. البناء: PyInstaller + FontForge.
- **استخدامي في الويب:** لا يُستَخدم — نستبدل الخطوط العربية عبر **Google Fonts (Cairo, Tajawal, Alexandria, Almarai)** كما مطبق في الواجهات.

## 5) Parth Personal Portfolio
- `github.com/mittal-parth/personal-portfolio` — 177★ · React + Vite + Tailwind.
- **مميزات:** استيراد بيانات LinkedIn ⚡️، Lottie + Framer Motion، Cypress E2E، Netlify.
- **الأقسام:** Hero / Skills / Education / Projects / Blogs / OSS / Extra-Curricular / Contact.
- **البنية:** `src/ snippets/ public/ cypress/ netlify/`.
- **استخدامي:** مرجع بنية **Portfolio** — واجهتنا `04` (reen) هي التطبيق العربي لهذه الفكرة.

## 6) Business Website Template (HooBank)
- `github.com/itsDaiton/business-website-template` — MIT · 340★ · React + Vite + Tailwind.
- **التخطيط:** Header → Hero → Features → Billing → Showcase → Testimonials → Clients → CTA → Footer.
- **البنية:** `src/ public/ tailwind.config.cjs/ vite.config.js`.
- **استخدامي:** مرجع بنية **Business/Landing** — واجهتنا `01` (nova) هي التطبيق العربي لهذا التخطيط.

## 7) Untitled UI
- **المستودع/الوثائق:** `untitledui.com` / `docs.untitledui.com`
- **v8.0** — Figma UI kit + مكتبة React (Tailwind CSS + React Aria) + 4,600 أيقونة (1,100 SVG مجانية) + Avatars + Logos.
- **نموذج الأعمال:** Freemium — Kickstart Figma مجاني، React/Avatars/Logos مجاني، لكن **React components PRO مدفوع**.
- **التوافق M3:** يدعم **Tailwind CSS v4.2 color palette** + **4px grid** → ينطبق جسر التوكنات تماماً (`--space-*` ←→ `space-*`، semantic colors ←→ `--md-*`).
- **الخط الأساسي:** Inter (Google Font). **الإتاحة:** مبنية على React Aria.
- **ملاحظة للويب المباشر:** مكتبة React، **غير قابلة الاستيراد مباشرة في HTML** — تُستخدم كـ **أصل تصميم (tokens + layout examples + icons)**، ثم تُعاد بناء مكوّناتها باستخدام مكوّنات `m3-*` في `واجهات`.
- **ربط بالمدونة:** يذكر فيها vibe/AI coding (Cursor · Claude Code · v0 · Bolt · Lovable) ⚡️ — يشارك نفس الجمهرى المستهدف من UI UX Pro Max.

---

## 🔄 جسر التوكنات — M3 ↔ خارجيات (Token Bridge)
> عند استيراد مكوّن أو تصميم من Pagifye/Tailwind/Figma → استخرج التوكن وضعه في `:root` باستخدام الجدول.

| توكن M3 (موحد في الواجهات) | ما يعادله في Tailwind/Figma |
|---|---|
| `--space-3xs … --space-xxl` (2/4/8/12/16/24/32/48) | `space-*`, `gap-*`, `p-*`, `m-*` (4px grid) ✅ متوافق تماماً |
| `--md-primary` / `--md-on-primary` | `bg-primary`, `text-primary` |
| `--md-primary-container` / `--md-on-primary-container` | `bg-primary/10`, `text-primary` |
| `--md-secondary-container` | `bg-secondary/10` |
| `--shape-xs…full` (8/12/16/28/999) | `rounded-{sm,md,lg,pill}` |
| `--md-elev-0…6` | `shadow-sm`, `shadow`, `shadow-lg` |
| `--md-outline` / `--md-outline-variant` | `border-border`, `divide-*` |
| `--font` (Cairo/Tajawal/…) | font-family tokens |
| `--md-on-surface` | `text-foreground` |

---

## 🧭 توجيهات الدمج العملي
1. **من ملف Figma/صفحة Pagifye** → افتحه، اقرأ التوكنات (مسافات ×4px، ألوان، الـ radius)، ثم الصقها في `:root` بجدول التوكنات.
2. **بدلاً من ربط bundle ثقيل** → استعمل مكوّنات `m3-*` الموحدة (`m3-btn-tonal`, `m3-chip`, `m3-fab`, `m3-list` …) — تعمل في أي ملف HTML وتستهلك التوكنات نفسها.
3. **للواجهات React/Tailwind** (مراجع 5 و 6) → خذ التخطيط الأقسام كقالب بنية، واستبدل `tailwind.config` بالـ tokens الدلالية `--md-*`.
4. **Pagifye.com/components؟** مكتبة أصول تصميم **JS-rendered** (الكتلة تُعادلها من Figma/Tailwind) — **لاتوجد CDN runtime**. يُعتمد منه **قيم التوكنات فق** (4px grid) وليس استيراد JS.

---

## 📁 خريطة ملفات الواجهات (أسماء أصلية × العلامة الحالية)
| الملف الأصلي | الواجهة | العلامة الجديدة |
|---|---|---|
| `01-landing-page.html` | Landing SaaS | **زين** |
| `02-dashboard.html` | لوحة تحكم | **رادار** |
| `03-ecommerce.html` | متجر ساعات فاخرة | **ذهبية** |
| `04-portfolio.html` | محفظة إبداعية | **رين** |
| `05-mobile-app.html` | تطبيق محفظة مالية | **لمع** |

> ملاحظة: أسماء الملفات الفعلية لم تعد تُعاد تسميتها (ما عدنا `nova.html` …). هذه الجداول توضح الربط من أجل الرجوع السريع بين الاسم القديم (الملف على القرص) والعلامة الجديدة.

---
*ملف مرجعي مركّز بدلاً من التنقّل بين 6 ملفات. يُعاد التحقق السريع عبر `_m3check.py` في الجذر.*

