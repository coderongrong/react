import './config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import myPlugin from './myPlugin.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { service } from './config/require'
import { input, _Promise } from 'make-loader'
import StoreReset from '../plugins/storeReset.js'
// import './promise.js'
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
app.mount('#app')
// console.log('_main.js')
// console.log('_main.js')
// console.log('_main.js')

// https://github.com/coderongrong/react/blob/vite2.0/my-config.js
// console.log('环境变量', import.meta.env)
