# 🎨 مكتبة UI UX Pro Max — وثيقة مرجعية محفوظة

> أُنشئت بتاريخ: 2026-08-29 — نوع المرجع: مكتبة تصميم (AI Skill)

---

## 🔗 الروابط الرسمية

| العنصر | الرابط |
|---|---|
| **GitHub (المستودع)** | `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` |
| **الموقع الرسمي** | `https://uupm.cc` |
| **حزمة npm (CLI)** | `https://www.npmjs.com/package/ui-ux-pro-max-cli` |
| **الترخيص** | MIT ✔ |

---

## 📌 ما هي؟

ليست أداة رسومية، بل **AI Skill (مهارة ذكاء اصطناعي)** تُثبَّت داخل مساعدي البرمجة الذكيين (Claude Code، Cursor، Windsurf، Copilot، Codex، Kiro، Trae…) لتمنحهم **ذكاءً تصميمياً** لبناء واجهات احترافية across **22 تقنية/إطار عمل**.
منتج من **NextLevelBuilder** — الإصدار الحالي: **2.13.0**+ (v2.0 أضاف Design System Generator).

## 📊 محتويات المكتبة (Database)

| المحتوى | العدد |
|---|---|
| أنماط UI قابلة للبحث | 84 |
| لوحات ألوان (Color Palettes) | 192 |
| توافق خطوط (Font Pairings) | 74 |
| إرشادات UX | 98 |
| أنواع مخططات بيانية (Charts) | 25 |
| قواعد استدلال تصميمي (Reasoning Rules) | 192 |
| تقنيات / Frameworks | 22 |
| أنظمة أساسية (Tech Stacks): React, Tailwind, HTML5, Mobile UI, Landing Page … | — |

## ✨ الميزة الرئيسية (v2.0)
**Design System Generator**: محرك استدلال ذكي يحلّل متطلبات مشروعك ويولّد **نظام تصميم كامل** (Pattern، CTA، Sections، Colors…) في ثوانٍ.

---

## 🚀 التثبيت والاستخدام

**شروط مسبقة:** Node.js + Python 3.x.

### 1) تثبيت سطر واحد لأي منصة:
```bash
npx ui-ux-pro-max-cli init --ai claude
```
المنصات المدعومة: `claude` • `cursor` • `windsurf` • `copilot` • `kiro` • `roocode` • `kilocode` • `codex` • `qoder` • `gemini` • `trae` • `opencode` • `continue` • `codebuddy` • `droid` • `warp` • `augment` • `antigravity` • `openclaw`

### 2) تثبيت عالمي ثم init:
```bash
npm install -g ui-ux-pro-max-cli
uipro init --ai claude
```

### 3) عبر Claude Code Marketplace:
```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

### 4) أمثلة استخدام (بعد التثبيت):
```bash
# بحث في أنماط UI (Domain: style)
python .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS" --domain style

# نفس البحث بصيغة JSON كاملة (غير مقتطعة)
python .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS" --domain style --json
```

## 🧹 مسارات إلغاء التثبيت اليدوي
```bash
rm -rf .claude/skills/ui-ux-pro-max    # Claude Code
rm -rf .cursor/skills/ui-ux-pro-max    # Cursor
rm -rf .windsurf/skills/ui-ux-pro-max  # Windsurf
rm -rf .agents/skills/ui-ux-pro-max    # Antigravity / Codex
```

---

## ⚠️ ملاحظات وحلول شائعة (Troubleshooting)

1. **خطأ `uipro: unknown command`** → حدّث الحزمة: `npm install -g ui-ux-pro-max-cli@latest`
2. **رفع ZIP للمستودع في Claude.ai يفشل** ("Zip contains too many files") → لا ترفع الـ ZIP الكامل أبداً؛ استخدم CLI أو Marketplace.
3. **خطأ "Zip contains a symbolic link"** (قبل v2.5.1) → استخدم المُثبّت CLI بدلاً من Marketplace.
4. **خطأ أذونات npm** → استخدم `npx ui-ux-pro-max-cli init --ai claude` بدون تثبيت عالمي.
5. **Python not found** → ثبّت Python 3.x يدوياً (المساعد الذكي يجب أن يطلب من المستخدم، لا يثبّته بنفسه).
6. **مخرجات مقطوعة** → استخدم `--json` للحصول على البيانات كاملة.

---

## 📎 مشاريع شقيقة من NextLevelBuilder
- nextlevelbuilder.io | goclaw.sh | claudekit.cc | tose.sh

---

## ✅ ملاحظة عملية لاستخدامي
عند طلب بناء واجهة مستقبلاً، أستخدم هذه المكتبة كمرجع وتصميم ذكي، أو أثبّتها عبر الأمر:
`npx ui-ux-pro-max-cli init --ai claude` داخل مجلد المشروع الجديد قبل البدء.