module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
  },
};
