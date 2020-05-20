module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    '@typescript-eslint/camelcase': ['off'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    'no-unused-vars': ['warn'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
