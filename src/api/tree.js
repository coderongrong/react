import { axios } from '../http/index'

/**
 * getUseInfo
 * params { * }
 * 
*/
export const getUseInfo = params => {
    return axios.post('jeecg-boot/sys/login', params)
}

/**
 * tree DATA
 * 
 * 
*/
export const getTreeData = params => {
    return axios.get('jeecg-boot/sys/productClass/queryByParentId', { params })
}

/**
 * rootlist
 * 
 * 
*/
export const getRootlist = params => {
    return axios.get('jeecg-boot/sys/product/rootList', { params })
} 