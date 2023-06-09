import './config'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from '@/router/index'
// import './promise.js'
// import './utils/eventBus.ts'

const app = createApp(App)

//  全局注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')

// https://github.com/coderongrong/react/blob/vite2.0/my-config.js
// console.log('环境变量', import.meta.env)
// http://lodash.think2011.net/defer  lodash

// class _Promise {
//   constructor(options) {
//     this.arr = []
//     this.result = null
//     options((data) => {

//       defer(() => {
//         console.log('A')
//         this.arr.forEach((fn) => fn(data))
//       })
//     })
//   }

//   then(options) {
//     console.log('B')
//     this.arr.push(options)
//   }
// }

// new _Promise((res) => {
//   res('res-data')
// }).then((res) => {
//   console.log('then', res)
// })
// .then((res) => {
//   console.log('then', res)
// })
