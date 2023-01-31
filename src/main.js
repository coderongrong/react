import './config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import myPlugin from './myPlugin.js'
import './assets/main.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Input from './custom/input.vue'
// import './assets/base.scss'
import classes from './assets/example.module.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

import { service } from './config/require'

const modules = import.meta.glob('./custom/*.vue')

// console.log('>>>>>> modules', modules)
const app = createApp(App)
app.use(ElementPlus)
app.use(Antd);

app.use(createPinia())

app.use(myPlugin, {
    /* 可选的选项 */
    i18n: 'i18n',
    axios: service
})
app.use(router)
app.component(Input.name, Input)  // 全局组件
app.mount('#app')
