import axios from 'axios'



const baseDomain = 'http://192.168.1.222:1007/'

const service = axios.create({
    baseURL: baseDomain,
    timeout: 600000,
    retry: 4,
    retryDelay: 1000,
});

export { service as axios };