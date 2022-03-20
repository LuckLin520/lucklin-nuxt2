import { Message } from './antd-ui'
export default ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        next()
    })
}