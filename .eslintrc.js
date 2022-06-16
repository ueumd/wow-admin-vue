module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],

  rules: {
    // override/add rules settings here, such as:
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'no-throw-literal': 'off',
    'no-callback-literal': 'off',
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    // 关闭template 根元素限制
    'vue/no-multiple-template-root': 'off'
  }
}
