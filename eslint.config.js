import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      semi: 'off',
      'react/react-in-jsx-scope': 'off',
      'import/extensions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-return-assign': 'off',
    },
  },
]
