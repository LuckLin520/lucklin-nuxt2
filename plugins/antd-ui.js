import Vue from 'vue'
import { ConfigProvider, message, Button } from 'ant-design-vue'
/**
 * 需要使用antd的其他组件请在页面中单独引入该组件js并使用，
 * 不要在此文件中引入！！！
 */
export default () => {
  Vue.use(ConfigProvider).use(Button)

  Vue.prototype.$message = message

  message.config({
    top: `35vh`,
    duration: 3,
    maxCount: 1
  })
}
