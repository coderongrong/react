import axios from 'axios'


const service = axios.create({
    //baseURL: '/jeecg-boot',
    // baseURL: apiBaseUrl, // api base_url  http://2l916746t7.goho.co:1008/jeecg-boot
    baseURL: 'http://2l916746t7.goho.co:1008/jeecg-boot',
    timeout: 5000 // 请求超时时间
})
service.interceptors.request.use(config => {
    const token = localStorage.getItem('Access-Token')
    // config.headers['max-age'] = 31536000
    if (token) {
        config.headers['X-Access-Token'] = token
    }
    return config
})

service.interceptors.response.use(response => {
    return response.data
}, () => { })

export {
    service
}
