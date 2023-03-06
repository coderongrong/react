import _ from 'lodash'
import App from './App.js'
import Demo from './demo.vue'
import hellow from './Hellow.md'

console.log('loadsh', _, App())


var arston = 'code rong'
var res = hellow()
console.log('ABC', process.env.NODE_ENV, typeof res, hellow()[4])


const div = document.createElement('div')
div.innerHTML = Demo() + ''
console.log(div)

const root = document.getElementById('root')
root.append(div)
