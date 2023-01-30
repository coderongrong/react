export function _replace(arr) {
    arr.forEach(item => {
        if(item.path == '/table') {
            // item.component = () => import('@/custom/Input.vue')
        }
    })
}