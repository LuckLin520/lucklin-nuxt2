export default function ({ store, redirect, app }) {
  const { $axios, $cookies } = app
  const { $message } = store._vm

  $axios.defaults.timeout = 15000
  $axios.onRequest(config => {
    if ($cookies.get('token')) config.headers.common['token'] = $cookies.get('token')
  })
  $axios.onError(error => {
    if (process.client) {
      console.log(error)
      const statusMap = {
        404: '请求未找到',
        408: '请求超时',
        502: '服务器错误',
        504: '网关超时'
      }
      $message.error(statusMap[error.response.status])
    }
  })
  $axios.interceptors.response.use(response => {
    if (process.client) {
      if (!response.data.status && response.data.msg) {
        app.context.isDev && $message.warning(response.data.msg)
      }
    }
    return response
  })
}
