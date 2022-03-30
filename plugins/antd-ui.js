import Vue from 'vue'
import { ConfigProvider, message, Modal } from 'ant-design-vue'

Vue.use(ConfigProvider)

Vue.prototype.$message = message
Vue.prototype.$modal = Modal

message.config({
  top: `35vh`,
  duration: 3,
  maxCount: 1
})
