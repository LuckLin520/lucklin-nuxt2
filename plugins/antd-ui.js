import Vue from 'vue'
import { ConfigProvider, message, Button } from 'ant-design-vue'
/**
 * nuxt中使用了babel-plugin-import按需引入后，'ant-design-vue/lib'的方式样式无效，
 * 所以需要使用antd的其他组件请在页面中单独引入该组件js并在components中注册，
 * 不要在此文件中引入！！！
 */
Vue.use(ConfigProvider).use(Button)

Vue.prototype.$message = message

message.config({
  top: `35vh`,
  duration: 3,
  maxCount: 1
})
