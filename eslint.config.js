import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
    // files
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    // settings
    { settings: { react: { version: '18.3' } } },
    // language settings
    {
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 'latest',
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.json'],
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    // plugins
    {
        plugins: {
            react: pluginReact,
        },
    },
    // configs
    pluginJs.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    pluginReact.configs.flat.recommended,

    // rules
    {
        rules: {
            ...pluginReact.configs.recommended.rules,
            ...pluginReact.configs['jsx-runtime'].rules,
            semi: 'off',
            'react/react-in-jsx-scope': 'off',
            'import/extensions': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-throw-literal': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            'no-unused-vars': 'off',
            'no-console': 'warn',
            'no-return-assign': 'off',
        },
    },
    {
        ignores: ['*.js', 'jest.*'],
    },
]
