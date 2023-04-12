// const p1 = new Promise((resolve, reject) => {
//   console.log('create a promise')
//   resolve('成功了')
// })

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

class _Promise {
  constructor(options) {
    this.i = 0
    this.result = null
    this.status = 'PENDING'
    this.reason = null
    this.resolveCallback = []
    this.rejectCallback = []
    options &&
      options(
        (res) => {
          this.status = 'FULFILLED'
          this.result = res
          this.resolveCallback.forEach((fn) => fn())
        },
        (rea) => {
          this.status = 'REJECTED'
          this.reason = rea
          this.rejectCallback.forEach((fn) => fn())
        }
      )
  }

  resolvePromise(promise2, x, resolve, reject) {
    // if (promise2 === x) {
    //   return reject(
    //     new TypeError('Chaining cycle detected for promise #<Promise>')
    //   )
    // }
    // let called
    // if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    //   try {
    //     let then = x.then
    //     if (typeof then == 'function') {
    //       then.call(x, (y) => {
    //         if (called) return
    //         called = true
    //         this.resolvePromise(promise2, y, resolve, reject)
    //       })
    //     } else {
    //       resolve(x)
    //     }
    //   } catch (e) {}
    // } else {
    //   resolve(x)
    // }
  }

  then(_resolve, _reject) {
    _resolve = typeof _resolve == 'function' ? _resolve : (v) => v
    _reject = typeof _reject == 'function' ? _reject : (v) => v

    let promise2 = new _Promise((resolve, reject) => {
      if (this.status == 'FULFILLED') {
        setTimeout(() => {
          let x = _resolve(this.result)
          this.resolvePromise(promise2, x, resolve, reject)
        })
      }
      if (this.status == 'PENDING') {
        this.resolveCallback.push(() => {
          try {
            let x = _resolve(this.result)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.rejectCallback.push(() => {
          setTimeout(() => {
            let x = _reject(this.reason)
            this.resolvePromise(promise2, x, resolve, reject)
          })
        })
      }
    })
    return promise2
  }

  catch(res) {
    if (this.status == 'REJECTED') {
      res(this.reason)
    }
  }
}
function options(resolve, reject){
  console.log('start')
  setTimeout(() => {
    resolve('成功 1001')
  }, 1000)
}
const p = new _Promise(options).then((res) => {
  console.log('success', res)
  // return new _Promise((resolve, rej) => {
  //   setTimeout(() => {
  //     resolve('成功 ---- 200')
  //   }, 1000)
  // })
})
// .then((res) => {
//   console.log('success then 2 ', res)
//   return new _Promise((resolve, rej) => {
//     setTimeout(() => {
//       resolve('成功 ---- 300')
//     }, 1000)
//   })
// })
// .then((res) => {
//   console.log('success then 3 ', res)
//   return new _Promise((res) => {
//     setTimeout(() => {
//       res(2000)
//     }, 1000)
//   })
// })
// .then((res) => {
//   console.log(res)
// })
//
