import { service } from '@/config/require.js'

export const getUserInfo = params => {
    return service.post('/sys/login', params)
}

export const register = params => {
    return service.post('/user/regester', params)
}

export const login = params => {
    return service.post('/user/login', params)
}