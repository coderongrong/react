
/*
*
* flat 
* params { * } arr
*/

var arr = [1, 2, 3, [4, 5, [6, 7]]]
function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}
// console.log(flat(arr))

/**
 * 
 * unique
 * 
 * 
 * **/
var _arr = [1, '1', 2, '2', 3, '3', 4, 5, 5, '6', '6', {}, {}]
function unique(arr) {
  const _arr = []
  const left = []
  const temp = {}
  arr.forEach(item => {
    if (typeof item == 'number') {
      left.push(item)
    } else {
      if (!temp[item]) {
        temp[item] = 'a'
        _arr.push(item)
      }
    }
  })
  return _arr.concat(left.filter((item, index) => left.indexOf(item) == index))
}
// console.log(unique(_arr))

/**
 * 
 * sort function
 * 
 * quickSort 快速
 * 
*/
var arr2 = [6, 5, 4, 7, 8, 9, 4, 2, 3, 1]
function quickSort(arr2) {
  if (arr2.length <= 1) return arr2
  var left = [];
  var right = [];
  var mid = arr2.splice(0, 1);
  // var mid = arr2[0];

  arr2.forEach(item => {
    if (item >= mid) {
      right.push(item)
    } else {
      left.push(item)
    }
  })
  
  return quickSort(left).concat(mid, quickSort(right))
  // return quickSort(left).concat(quickSort(right))
}
// console.log(quickSort(arr2))

/**
 * 括号配对
 * 
 * [()[]{()}]
 * '[()[]{()}](('
*/
var str = '[()[]{()}](('
function matchStr(str) {
  if(str.length % 2 == 1) return false
  var obj = {
    "}": '{',
    ")": '(',
    "]": '[',
  }
  var arr = []
  str = str.split('')
  str.forEach(item => {
    if(obj[item]) {
      arr.pop()
    } else {
      arr.push(item)
    }
  })
  return arr.length == 0
}
// console.log(matchStr(str))

/**
 * 防抖
 * debounce function
 * 
*/
var debounce = (function () {
  var timer = null
  return function (fn) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, 200)
  }
}())
function debounce_fn() {
  console.log('debounce')
}
Array(5).fill(1).forEach(item => {
  debounce(debounce_fn)
})