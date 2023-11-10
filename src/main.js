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
import './Hooks/TsDemo/Demo.ts'
// import Drag from './hooks/Drag.vue'
const app = createApp(App)
// const app = createApp(Drag)

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
