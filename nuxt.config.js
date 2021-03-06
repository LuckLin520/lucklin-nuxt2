import CompressionPlugin from 'compression-webpack-plugin'
import path from 'path'
import antDesignThemePlugin from './theme.config'
import defaultTheme from './assets/theme/default-variables'
import apiconfig from './api.config'
const baseURL = apiconfig[process.env.NODE_ENV]
const isDev = process.env.NODE_ENV === 'development'
export default {
  ssr: true,
  // target: 'static',
  head: {
    htmlAttrs: {
      lang: 'zh-CN'
    },
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=0.3, maximum-scale=0.3, minimum-scale=0.3' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'keywords' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0378FF' },
  /*
   ** Global CSS
   */
  css: ['@/assets/common.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui', '@/plugins/axios', '@/plugins/route'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['cookie-universal-nuxt', '@nuxtjs/axios'],
  axios: {
    proxy: false,
    prefix: '/api',
    credentials: true,
    baseURL
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
    plugins: [
      // gzip
      new CompressionPlugin({
        filename: '[path][base].gz[query]',
        test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240 // 对超过10kb的数据进行压缩
        // deleteOriginalAssets: !isDev // 是否删除原文件
      }),
      antDesignThemePlugin
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: defaultTheme
        }
      }
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true
          }
        ]
      ]
    },
    transpile: ['ant-design-vue'],
    extractCSS: !isDev, // 提取css到单独link文件
    extend(config, ctx) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, 'assets/antd-icon.js')
    }
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
    routes() {
      //ssg使用
      return new Promise(rs => {
        setTimeout(() => {
          let arr = [1, 2, 3].map(v => ({ route: '/' + v, payload: { id: v } }))
          rs(arr)
        }, 2000)
      })
    }
  }
}
