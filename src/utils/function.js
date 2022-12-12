console.log('function')

var arr = [1,2,3,4, [5,6,7, [8, 9]]]

// function flat(arr) {   
//     while(arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr)
//     }
//     return arr
// }

// function flat(arr) {   
//     return arr.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
//     }, [])
// }

// function flat(arr) {
//     var str = JSON.stringify(arr)
//     str = str.replace(/\[|\]/g, '')
//     return str.split(',')
// }

// function flat(arr) {
//     return arr.toString().split(',')
// }

// function flat(arr) {
//     return arr.flat(Infinity)
// }

function flat(arr) {



    return arr
}

console.log(flat(arr))