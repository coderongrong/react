import service from "@/config/request"


export const _getTreeData = params =>  {
    return service.get('/sys/productClass/queryByParentId', {params})
}