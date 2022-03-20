export default function ({ store, redirect, app }) {
	const {$axios,$cookies} = app
	const {$message} = store._vm.$message

	$axios.defaults.timeout = 15000
	$axios.onRequest(config => {
		if(!config.data) config.data = {}
		if(/^get$/i.test(config.method)){
			config.params = config.data
			delete config.data
		}
		if($cookies.get('token')) config.headers.common['token'] = $cookies.get('token') 
	})
	$axios.onError(error => {
		
		// if(error.message.indexOf('timeout of')>-1) $message.error('请求超时！')
		if(process.client) $message.error(error.message)
	})
	$axios.interceptors.response.use(response => {
		
		return response
	})
}