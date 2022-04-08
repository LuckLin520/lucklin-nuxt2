module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: [],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 140, //代码单行长度
        tabWidth: 2, //tab键缩进为2空格
        useTabs: false, //使用空格缩进
        singleQuote: true, //js单引号
        semi: false, //去分号
        trailingComma: 'none', //无尾逗号
        arrowParens: 'avoid', //箭头函数尽可能省略括号
        jsxBracketSameLine: true //标签换行后>单独一行
      }
    ]
  }
};
