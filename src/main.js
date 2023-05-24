import './config'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')

// https://github.com/coderongrong/react/blob/vite2.0/my-config.js
// console.log('环境变量', import.meta.env)

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
    },
  })
}

const obj = reactive({a: 1})
