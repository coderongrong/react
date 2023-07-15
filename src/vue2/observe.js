class Observe {
    constructor(value) {
        def(value, '__ob__', this)
        if(Array.isArray(value)){
            value.__proto__ = arrayMethods
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    observeArray(data) {
        data.forEach(item => {
            observe(item)
        })
    }
    walk(data) {
        Object.keys(data).forEach(item => {
            defineReactive(data, item, data[item])
        })
    }
}

function defineReactive(data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            return value
        },
        set(newValue) {
            console.log('值变化了')
            if(value === newValue) return
            observe(newValue)
            value = newValue
        }
    })
}

function observe (data) {
    if(!isObj(data)) return
    return new Observe(data)
}