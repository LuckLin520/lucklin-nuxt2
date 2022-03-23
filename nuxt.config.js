import theme from "./assets/theme"
import apiconfig from './api.config'
const baseURL = apiconfig[process.env.NODE_ENV]
const isDev = process.env.NODE_ENV === 'development'
export default {
  ssr: true,
  // target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-CN',
    },
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=0.3, maximum-scale=0.3, minimum-scale=0.3' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: "keywords" },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    // script: [
    //   { src: 'https://cdn.bootcdn.net/ajax/libs/socket.io/2.3.0/socket.io.slim.js'}
    // ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0378FF' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/common.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios',
    {src: '@/plugins/route', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios'
  ],
  axios: {
    // proxy: process.env.NODE_ENV === 'development', // 是否使用代理
    proxy: true,
    prefix: '/api',
    credentials: true,
    baseURL,
  },
  proxy: {
    '/api': {
      target: baseURL,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style:true
          },
        ]
      ],
    },
    transpile: ['ant-design-vue'],
    extractCSS: !isDev, // 提取css到单独link文件
    extend(config, ctx) {
    },
    // publicPath: './'
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
    timing: {
      total: true
    }
  },
  generate: {
    routes() {//ssg使用
      return new Promise(rs=>{
        setTimeout(()=>{
          let arr = [1,2,3].map(v=> ({route: '/'+v,payload: {id:v}}))
          rs(arr)
        }, 2000)
      })
    }
  }
}
