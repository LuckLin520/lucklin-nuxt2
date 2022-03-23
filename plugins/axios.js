export default function ({ store, redirect, app }) {
	const {$axios,$cookies} = app
	const {$message} = store._vm

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
		if(process.client) {
			const statusMap = {
				"408":'请求超时',
				"502":'服务器错误'
			}
			$message.error(statusMap[error.response.status])
		}
	})
	$axios.interceptors.response.use(response => {
		
		return response
	})
}