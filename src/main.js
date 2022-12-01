import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import myPlugin from './myPlugin.js'
import './assets/main.css'

// import './assets/base.scss'
import classes from './assets/example.module.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

import { service } from './config/require'

const modules = import.meta.glob('./components/*.vue')

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.use(createPinia())

app.use(myPlugin, {
    /* 可选的选项 */
    i18n: 'i18n',
    axios: service
})

app.mount('#app')
