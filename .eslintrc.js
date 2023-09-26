/** @type {import('eslint').Linter.Config} */

const config = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
}

module.exports = config
