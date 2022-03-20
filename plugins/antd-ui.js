import Vue from 'vue'
import {
    ConfigProvider, message, Modal, Button, Result
} from 'ant-design-vue'

Vue.use(ConfigProvider).use(Button).use(Result)

Vue.prototype.$message = message
Vue.prototype.$modal = Modal
message.config({
    top: `35vh`,
    duration: 3,
    maxCount: 1,
})

