module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    './node_modules/standard/eslintrc.json',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-absolute-path': 0
  },
}
