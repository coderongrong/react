import './config'
// import './file.md'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import myPlugin from './myPlugin.js'
// import './assets/main.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Input from './custom/input.vue'
// import '@/utils'
// import '@/utils/eventbus.ts'
// import './assets/base.scss'
import classes from './assets/example.module.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

import { service } from './config/require'
import { input, _Promise } from 'make-loader'

import StoreReset from '../plugins/storeReset.js'
// const modules = import.meta.glob('./custom/*.vue')
// console.log('>>>>>> modules', modules)

// import './promise.js'
// import './apromise.js'

const app = createApp(App)

const pinia = createPinia()
pinia.use(StoreReset)

app.use(ElementPlus)
app.use(Antd)

app.use(pinia)

app.use(myPlugin, {
  /* 可选的选项 */
  i18n: 'i18n',
  axios: service,
})

app.use(router)
app.component(input.default.name, input.default) // 全局组件
app.mount('#app')

new _Promise((res, rej) => {
  res(100)
}).then(res => {
  // console.log('mian ---> res', res)
})
// https://github.com/coderongrong/react/blob/vite2.0/my-config.js

  console.log('环境变量', import.meta.env)