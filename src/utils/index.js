/**
 * handleData
 * 
*/
export const handleData = (data) => {
    if(Array.isArray(data)) return data
}

/**
 * handleTree
 *  递归遍历树结构
*/

export const handleTree = (data) => {
    if(!Array.isArray(data)) return data
    return data.map(item => {
        return {
            ...item,
            key: item.id,
            label: item.meta.title,
            icon: '',
            children: item.children?.length > 0 ? handleTree(item.children) : null
        }
    })
}