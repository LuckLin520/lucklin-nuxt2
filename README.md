# nuxt-demo

> My world-class Nuxt.js project


## 注意
    1.layout中的script中（export default外）的js都是作用全局,不要在layout引入过多没必要的内容
    2.图标全部svg放置在components/my-icon下，通过my-icony使用
    3.nuxt按需加载请不要在plugins/antd-ui.js中注册组件，在需要使用的页面单独引入

## 代码提交规范
    build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
    ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
    docs：文档更新
    feat：新增功能
    merge：分支合并 Merge branch ? of ?
    fix：bug 修复
    perf：性能, 体验优化
    refactor：重构代码(既没有新增功能，也没有修复 bug)
    style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
    test：新增测试用例或是更新现有测试
    revert：回滚某个更早之前的提交
    chore：不属于以上类型的其他类型
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
