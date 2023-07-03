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

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



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

// https://github.com/coderongrong/react/blob/vite2.0/my-config.js
// console.log('环境变量', import.meta.env)
