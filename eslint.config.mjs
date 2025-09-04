// eslint.config.mjs
import path from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  // Base JavaScript config
  js.configs.recommended,

  // Main configuration for all files
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        prompt: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      import: importPlugin,
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Basic JavaScript/TypeScript rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off', // Disabled in favor of unused-imports plugin

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/require-await': 'warn',

      // Import rules
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Import sorting
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'error',

      // React rules
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Using TypeScript instead
      'react/no-unescaped-entities': 'warn',
      
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // JSX Accessibility rules (relaxed)
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/iframe-has-title': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',

      // React Fast Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Additional rules
      'no-irregular-whitespace': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },
  },

  // Specific config for JS files
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'build/**/*',
      '.next/**/*',
      'node_modules/**/*',
      'dist/**/*',
      '**/*.js.map',
      '**/*.d.ts',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      'coverage/**',
    ]
  },
]
