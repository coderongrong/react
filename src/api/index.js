import { service } from '@/config/require.js'

export const getUserInfo = params => {
    return service.post('/sys/login', params)
}