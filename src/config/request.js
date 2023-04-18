import axios from 'axios'

// interface serviceType {
//     baseURL: string,
//     timeout: number
// }

// interface responseType {
//     data?: any[]
// }

const service = axios.create({
    baseURL: 'http://192.168.1.222:1008/jeecg-boot',
    timeout: 5000
})

service.interceptors.request.use((config) => {
    config.headers['X-Access-Token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzE1MDEyOTEsInVzZXJuYW1lIjoiamlleWluZ2ppbmcifQ.YqEkcnxK9pjXTlfQMK2mswiYhY4MzEwFxQKIb_A3d8U'
    // console.log(config)
    return config
}, (error) => {
    return Promise.reject(error)
})

service.interceptors.response.use((response) => {

    return response.data
})


export default service