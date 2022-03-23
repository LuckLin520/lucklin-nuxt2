# nuxt-demo

> My world-class Nuxt.js project


## 注意
    1.layout中的script中（export default外）的js都是作用全局,不要在layout引入过多没必要的内容
    2.图标全部svg放置在components/my-icon下，通过my-icony使用
    3.nuxt按需加载请不要在plugins/antd-ui.js中注册组件，在需要使用的页面单独引入
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
