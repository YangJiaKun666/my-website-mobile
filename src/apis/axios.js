import axios from 'axios'
axios.defaults.baseURL = 'http://139.155.233.206:3001'
axios.defaults.timeout = 30000

axios.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject(error)
	}
)

export const get = function(url, data, headers) {
	return new Promise(resolve => {
		axios({
			method: 'GET',
			url: url,
			params: data || {},
			headers: headers || {}
		}).then(res => {
			resolve(res.data)
		})
	})
}