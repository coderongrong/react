
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


var _arr = [1, '1', 2, 3, 4, 5, 5, '6', '6', {}, {}]
function unique(arr) {
  const _arr = []
  var temp = {}
  arr.forEach(item => {
    if(!temp[item]){
      temp[item] = 'a'
      _arr.push(item)
    }
  })
  return _arr
}
console.log(unique(_arr))