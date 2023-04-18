import App from './App.vue'
// import Vue from 'vue'
// import $ from 'jquery';
import "./assets/style.css";
import "./assets/demo.css";
import "./assets/index.less";
import './assets/common.css';
import './assets/hello.css';




new Vue({
    render: h => h(App)
}).$mount('#app')

class Person {
    name = 'webpack'
    eat() {
        console.log('eat')
    }
}
var inherit = (function () {
    function Fn() {}
    return function (origin, target) {
        Fn.prototype = origin.prototype
        target.prototype = new Fn()
        Target.prototype.constructor = Target //为了让Target原型的constructor指回Target
		Target.prototype.uber = Origin.prototype
    }
}())
const p1 = new Person()
// p.fn()
// console.log(Person.prototype.__proto__ == Object.prototype)
// console.log(Person.prototype.__proto__.__proto__ == null)
function Father() {
    this.a = 'xxx'
}
Father.prototype.name = 'webpack'
function Son () {
    this.b = 'yyyy'
}
Son.prototype = Father.prototype
// inherit(Father, Son)
Son.prototype.name = 'h2'

// console.log(Father.prototype)



