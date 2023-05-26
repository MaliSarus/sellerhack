module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    // 'plugin:storybook/recommended',
    'prettier',
    // 'plugin:storybook/recommended'
  ],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['./src/**/*.vue'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  ignorePatterns: ['/src/**/*.test.ts', 'node_modules/**/*.vue'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-v-model': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/no-setup-props-destructure': 'off'
  }
};
