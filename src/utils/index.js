
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
console.log(flat(arr))