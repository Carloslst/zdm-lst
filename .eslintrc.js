module.exports = {
  env: {
  browser: true,
  es2021: true,
  node: true,
},
extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
overrides: [],
parser: 'vue-eslint-parser',
parserOptions: {
  ecmaVersion: 12,
  parser: '@typescript-eslint/parser',
  sourceType: 'module',
  project: ['./tsconfig.json'],
  extraFileExtensions: ['.vue'],
},
plugins: ['vue', '@typescript-eslint', 'simple-import-sort'],
ignorePatterns: ['.eslintrc.js', '.eslintrc.prod.js'],
globals: {
  uni: 'readonly',
  plus: 'readonly',
  PlusShareShareService: 'readonly',
  getApp: 'readonly',
  $getAppWebview: 'readonly'
},
rules: {
  // https://eslint.vuejs.org/rules/multi-word-component-names.html
  'vue/multi-word-component-names': 'off',
  "vue/no-v-html":"off",
  "no-console": "off",
  "no-unused-vars": "off",
  "no-undef": "off",
  // 固定 vue 文件的标签顺序为 <template>、<script>、<style>
  // 'vue/component-tags-order': [
  //   'error',
  //   {
  //     order: ['template', 'script', 'style'],
  //   },
  // ],
  "@typescript-eslint/no-explicit-any": ["off"],
  // '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: false,
    },
  ]
},
}
