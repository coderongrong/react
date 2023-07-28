class Vue {
    constructor (options) {
        this._init(options)
    }

    _init(options) {
        const vm = this
        vm.$options = options
        
        // 对数据做处理
        initState(vm)
    }
}

function initState(vm) {
    const opts = vm.$options
    if(opts.data) {
        initData(vm)
    }
}

function initData (vm) {
    let data = vm.$options.data
    data = typeof data === 'function' ? data.call(vm) : data
    vm._data = data

    // 对对象的劫持    MVVM 数据变化
    observe(data)
}

function isObject(obj) {
    return typeof obj == 'object' && obj != null
}

let oldArrayMethods = Array.prototype
let arrayMethods = Object.create(oldArrayMethods)

const methods = [
    'pop',
    'push',
    'shift',
    'unshift',
    'sort',
    'reverse',
    'splice'
]
methods.forEach(method => {
    arrayMethods[method] = function (...arg) {
        console.log('push 方法')
        const result = oldArrayMethods[method].apply(this, arg)
        let inserted
        let ob = this.__ob__
        switch(method) {
            case 'push':
            case "unshift":
                inserted = arg
                break
            case 'splice':
                inserted = arg.slice(2)
        }
        if(inserted) ob.observeArr(inserted)
        return result
    }
})

class Observe {
    constructor (data) {
        Object.defineProperty(data, '__ob__', {
            enumerable: false,
            configurable: false,
            value: this
        })
        if(Array.isArray(data)) {
            data.__proto__ = arrayMethods
            this.observeArr(data)
        } else {    
            this.walk(data)
        }
    }

    observeArr(value) {
        value.forEach(item => observe(item))
    }

    walk(data) {
        for(let key in data) {
           definreatice(data, key, data[key]) 
        }
    }
}


// function arrayMethods () {

// }

function definreatice (data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('get')
            return value
        },
        set(newVal) {
            if(newVal == value) return
            observe(newVal)
            value = newVal
        }
    })
}
function observe(data) {

    if(!isObject(data)) return
    return new Observe(data)
}