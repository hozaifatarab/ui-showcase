/**
 * إعداد ESLint (Flat Config) للمنصة — جاهز للتفعيل.
 *
 * ملاحظة: تعذّر تثبيت typescript-eslint حاليًا لأن إصداراته تتطلب TypeScript < 6.1
 * بينما المشروع يستخدم TypeScript 7 (typescript-eslint 8.70 → peer typescript ">=4.8.4 <6.1.0").
 * عند توفر نسخة تدعم TS 7 تُفعَّل بقواعد المشروع عبر:
 *   npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals
 *   npm run lint
 * لحين ذلك، تُستخدم Prettier (npm run format) لفرض اتساق التنسيق.
 */
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '*.local'] },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      // توافق مع أسلوب المشروع: بدون فواصل منقوطة، اقتباس مفرد
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
      // منطق الإعداد لمرة واحدة في المودال والمؤقتات مقصود أن يبقى بدون deps
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
)