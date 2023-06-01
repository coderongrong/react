import './config'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import { createPinia } from 'pinia'
// import './promise.js'
// import './utils/eventBus.ts'
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')

// https://github.com/coderongrong/react/blob/vite2.0/my-config.js
// console.log('环境变量', import.meta.env)

class Person {
  constructor(options) {
    this.options = options
    // this.#foo = 'foo 100'
  }
  #bar
  #foo = 100
  value = 42
  run() {
    console.log('running', this.#foo)
  }
}

var person = new Person()
console.log(person.value)
console.log(person.foo)
console.log(person.foo)
person.run()
// person.run()
