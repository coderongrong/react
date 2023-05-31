// const p1 = new Promise((resolve, reject) => {
//   console.log('create a promise')
//   resolve('成功了')
// })

import { reject } from 'lodash'

// console.log('after new promise')

// const p2 = p1.then((data) => {
//   console.log(data)
//   throw new Error('失败了')
// })

// const p3 = p2.then(
//   (data) => {
//     console.log('success', data)
//   },
//   (err) => {
//     console.log('faild', err)
//   }
// )

// class _Promise {
//   constructor(options) {
//     this.i = 0
//     this.result = null
//     this.status = 'PENDING'
//     this.reason = null
//     this.resolveCallback = []
//     this.rejectCallback = []
//     options &&
//       options(
//         (res) => {
//           this.status = 'FULFILLED'
//           this.result = res
//           this.resolveCallback.forEach((fn) => fn())
//         },
//         (rea) => {
//           this.status = 'REJECTED'
//           this.reason = rea
//           this.rejectCallback.forEach((fn) => fn())
//         }
//       )
//   }

//   resolvePromise(promise2, x, resolve, reject) {
//     if (promise2 === x) {
//       return reject(
//         new TypeError('Chaining cycle detected for promise #<Promise>')
//       )
//     }
//     let called
//     if ((typeof x === 'object' && x != null) || typeof x === 'function') {
//       try {
//         let then = x.then
//         if (typeof then == 'function') {
//           then.call(x, (y) => {
//             if (called) return
//             called = true
//             this.resolvePromise(promise2, y, resolve, reject)
//           })
//         } else {
//           resolve(x)
//         }
//       } catch (e) {}
//     } else {
//       console.log('xxxxxxxxx')
//       resolve(x)
//     }
//   }

//   then(_resolve, _reject) {
//     _resolve = typeof _resolve == 'function' ? _resolve : (v) => v
//     _reject = typeof _reject == 'function' ? _reject : (v) => v

//     let promise2 = new _Promise((resolve, reject) => {
//       if (this.status == 'FULFILLED') {
//         setTimeout(() => {
//           let x = _resolve(this.result)
//           this.resolvePromise(promise2, x, resolve, reject)
//         })
//       }
//       if (this.status == 'PENDING') {
//         this.resolveCallback.push(() => {
//           try {
//             let x = _resolve(this.result)
//             this.resolvePromise(promise2, x, resolve, reject)
//           } catch (e) {
//             reject(e)
//           }
//         })
//         this.rejectCallback.push(() => {
//           setTimeout(() => {
//             let x = _reject(this.reason)
//             this.resolvePromise(promise2, x, resolve, reject)
//           })
//         })
//       }
//     })
//     return promise2
//   }

//   catch(res) {
//     if (this.status == 'REJECTED') {
//       res(this.reason)
//     }
//   }
// }

class _Promise {
  constructor(options) {
    this.result = null
    this.resArr = []

    options((res) => {
      this.result = res
      this.resArr.forEach((fn) => fn())
    })
  }

  handleData(res, r, p) {
    if ((typeof r == 'object' && r != null) || typeof r == 'function') {
      if (typeof r.then == 'function') {
        r.then.call(r, (y) => {
          this.handleData(res, y, p)
        })
      }
    } else {
      res(r)
    }
  }

  then(resolve) {
    let p = new _Promise((res) => {
      this.resArr.push(() => {
        const r = resolve(this.result)
        this.handleData(res, r, p)
      })
    })
    return p
  }
}

new _Promise((res) => {
  setTimeout(() => {
    res(1000)
  }, 1000)
})
  .then((res) => {
    console.log('res --> ', res)
    return new _Promise((res) => {
      setTimeout(() => {
        res(200)
      }, 1000)
    })
  })
  .then((res) => {
    console.log('res --> 2', res)
  })

export default _Promise
