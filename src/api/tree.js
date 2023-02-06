import { axios } from '../http/index'
console.log('axios --->>> axios', axios)

/**
 * getUseInfo
 * params { * }
 * 
*/
export const getUseInfo = params => {
    console.log(params)
    return axios.post('jeecg-boot/sys/login', params)
} 


/**
 * tree DATA
 * 
 * 
*/
export const getTreeData = params => {
    console.log(params)
    return axios.post('jeecg-boot/sys/login', params)
} 