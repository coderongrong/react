import axios from 'axios'

const baseDomain = 'http://192.168.1.222:1007/'

const service = axios.create({
    baseURL: baseDomain,
    timeout: 600000,
    retry: 4,
    retryDelay: 1000,
});

service.interceptors.request.use(config => {
    const token = localStorage.getItem('usreToken')
    // config.headers['max-age'] = 31536000
    if (token) {
        config.headers['X-Access-Token'] = token
    }
    return config
})

service.interceptors.response.use(response => {
    return response.data
}, () => { })

export { service as axios };