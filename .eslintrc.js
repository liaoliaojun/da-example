const isProd = process.env.NODE_ENV === 'production'
const warnInDev = isProd ? 'error' : 'warn'

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
   /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // Specifies the ESLint parser
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      tsx: true, // Allows for the parsing of JSX
      jsx: true,
    },
  },
  rules: {
    'quote-props': 'off',
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'no-var': 'error',
    'indent': 'off', // eslint的缩进禁用，使用vue/script-indent缩进
    'comma-dangle': [warnInDev, 'always-multiline'],
    'key-spacing': [warnInDev, {'afterColon': true}], // 冒号后必须有空格
    'eqeqeq': [warnInDev, 'always'], // 使用全等 ===
    'quotes': [warnInDev, 'single'], // 必须单引号
    'semi': [warnInDev, 'never'], // 不能有分号
    'object-curly-spacing': [warnInDev, 'never'], // 对象内前后不许有空格
    'vue/script-indent': [warnInDev, 2, {baseIndent: 1, switchCase: 1}], // script缩进俩个空格
    'comma-spacing': [warnInDev, {after: true}], // 逗号之后必须有空格
    'curly': 'off',
    'arrow-parens': 'off',
    'camelcase': 'off',
    // 项目允许在需要注释时换行书写 else，但 ESLint 不允许混用多种 if-else 风格，因此只得停用此规则。
    'brace-style': 'off',
    '@typescript-eslint/no-unused-vars': [warnInDev],
    'max-lines': [warnInDev, 800],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': ['strictCamelCase'],
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 未使用的变量/参数   不包含下划线前缀的变量
    '@typescript-eslint/no-unused-vars': [warnInDev, {'argsIgnorePattern': '^_'}],
    // 停止命名约定
    '@typescript-eslint/naming-convention': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*.vue'],
  //     rules: {
  //       'indent': 'off',
  //     },
  //   },
  // ],
  // parserOptions: {
  //   parser: 'babel-eslint',
  // },
  // plugins: [
  //   'graphql',
  // ],
}
