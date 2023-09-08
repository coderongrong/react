import './config'
import App from './App.vue'
import myPlugin from './myPlugin.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { service } from './config/require'
import { _Promise } from 'make-loader'
import StoreReset from '../plugins/storeReset.js'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './utils/eventBus'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
pinia.use(() => ({ hello: 'world' }))
pinia.use(StoreReset)
pinia.use(SecretPiniaPlugin)

app.use(ElementPlus)
app.use(Antd)

app.use(pinia)

app.use(myPlugin, {
  /* 可选的选项 */
  i18n: 'i18n',
  axios: service,
})

app.use(router)
app.mount('#app')

// https://github.com/coderongrong/react/blob/vite2.0/my-config.js
// console.log('环境变量', import.meta.env)

function resolvePromise(p2, x, resolved) {
  // console.log('------->', p2, x, resolved)
}
class myPromise {
  state = null
  resArr = []
  rejArr = []
  constructor(excutor) {
    excutor(
      (data) => {
        this.state = data
        this.resArr.forEach((fn) => fn())
      },
      (err) => {
        this.state = err
      }
    )
  }

  then(resolved) {
    const p2 = new myPromise((res, rej) => {
      setTimeout(() => {
        this.resArr.push(() => {
          let x = resolved(this.state)
          resolvePromise(p2, x, res)
          setTimeout(() => {
            res(x)
          }, 500)
        })
      }, 0)
    })

    return p2
  }
}

// new myPromise((res, rej) => {
//   setTimeout(() => {
//     res(1000)
//   }, 500)
// })
//   .then((res) => {
//     console.log('1', res)
//     return 123
//   })
//   .then((resa) => {
//     console.log('2', resa)
//   })

// new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1000)
//   }, 500)
// })
//   .then((res) => {
//     console.log('1', res)
//     return res
//   })
//   .then((res) => {
//     console.log('2', res)
//   })
function sum(a, b) {
  return a + b
}

function len(str) {
  return str.length
}

function addPrefix(str) {
  return '$' + str
}

// function compose(...fn) {
//   return function (...args) {
//     let res = fn.pop()(...args) // 'ab'
//     return fn.reduceRight((prev, current) => {
//       return current(prev)
//     }, res)
//   }
// redux
// const compose = (...fn) =>
//   fn.reduce(
//     (a, b) =>
//       (...args) =>
//         a(b(...args))
//   )
// let final = compose(addPrefix, len, sum)
// console.log(final('a', 'b'))

// const weakMap = new WeakMap()

// let obj = { a: 3 }

// weakMap.set({ a: 1 }, 'b')
// weakMap.set(obj, 'b')
// weakMap.set(obj, 'b')
// weakMap.set(obj, 'b')
// weakMap.set(obj, 'b')

// obj = null
// console.log(weakMap.get(obj))
// console.log(weakMap)

// let obj1 = {obj1: '11'}
// const map = new Map()
// map.set(obj1, 'obj1')
// map.set(obj1, 'obj11')
// obj1 = null
// console.log(map)
// console.log(map.keys() == obj1)

// var o = { a: 1, b: 2 }
// var obj = new Proxy(o, {
//   get(parmas, p) {
//     console.log('get', parmas, p)
//     return parmas[p]
//   },
//   set(t, p, value) {
//     console.log('set', t, p, value)
//     t[p] = value
//     return true
//   }
// })
// obj.d = 3
// console.log(obj)
