module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier', '@typescript-eslint'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    eqeqeq: 'error',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
  },
};
