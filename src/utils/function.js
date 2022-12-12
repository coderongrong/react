console.log('function')

var arr = [1, 2, 3, 4, [5, 6, 7, [8, 9]]]

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

// function flat(arr) {
//     if(!Array.isArray(arr)) return arr
//     var temp = []
//     arr.forEach(item => {
//         if(Array.isArray(item)) {
//             temp = temp.concat(flat(item))
//         } else {
//             temp.push(item)
//         }
//     })
//     return temp
// }

// console.log(flat(arr))

var arr = [1, 2, 3, 4, 5, 4, 4, 4, 4, {}, {}, {a: 1}, {a: 1}]

function unique(arr) {
    console.log(arr)
    
    // return [...new Set(arr)]

    // return arr.filter((item, index) => arr.indexOf(item) == index)

    // var temp = {}
    // var _arr = []
    // arr.forEach(item => {
    //     if(!temp[item]) {
    //         temp[item] = 1
    //         _arr.push(item)
    //     }
    // })
    // return _arr

    // for(var i = 0; i < arr.length; i ++) {
    //     if(arr.indexOf(arr[i]) != i){
    //         arr.splice(i, 1)
    //         i --
    //     }
    // }
    // return arr

    // var temp = []
    // arr.forEach(item => {
    //     if(!temp.includes(item)) {
    //         temp.push(item)
    //     }
    // })

    var temp = []
    var obj = {}
    arr.forEach(item => {
        if(!obj[JSON.stringify(item)]) {
            obj[JSON.stringify(item)] = 'a'
            temp.push(item)
        }
    })
    return temp
}

console.log(unique(arr))


// var arr = [4, 1, 2, 9, 8, 5, 6, 7, 3, 4]

//快速排序
// function sort(arr) {
//     if(arr.length <= 1) return arr
//     var left = []
//     var right = []
//     var mid = arr.splice(0, 1)
//     for(var i = 0; i < arr.length; i ++) {
//         if(arr[i] > mid) {
//             right.push(arr[i])
//         } else {
//             left.push(arr[i])
//         }
//     }
//     return sort(left).concat(mid).concat(sort(right))
// }

// 冒泡排序
// function sort(arr) {
//     for(var i = 0; i < arr.length; i ++) {
//         for(var j = i; j < arr.length; j ++) {
//             if(arr[j] < arr[i]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }

// 选择排序  
// function sort(arr) {
//     var maxIndex;
//     var len = arr.length;
//     var temp = [];
//     for(var i = 0; i < len; i ++) {
//         maxIndex = i
//         for(var j = i + 1; j < len; j ++) {
//             if(arr[j] < arr[maxIndex]) {
//                 maxIndex = j
//             }
//         }
//         [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
//     }
//     return arr
// }

//  arr = [4, 1, 2, 9, 8, 5, 6, 7, 3, 4]
// 插入排序
// function sort(arr) {
//     for (var i = 1; i < arr.length; i++) {
//         var key = arr[i];
//         var j = i - 1
//         while (arr[j] > key) {
//             arr[j + 1] = arr[j] 
//             j--
//         }
//         arr[j + 1] = key
//     }
//     return arr
// }

// console.log(sort(arr))


