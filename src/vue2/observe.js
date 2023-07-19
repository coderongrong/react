class Observe {
    constructor(value) {
        this.dep = new Dep
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
    let dep = new Dep()

    let childOb = observe(value)
    
    Object.defineProperty(data, key, {
        get() {
            // console.log('取值')
            if(Dep.target) {
                dep.depend()
                if(childOb) {
                    childOb.dep.depend()
                    if(Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set(newValue) {
            // console.log('值变化了')
            if(value === newValue) return
            observe(newValue)
            value = newValue
            dep.notify()
        }
    })
}

function observe (data) {
    if(!isObj(data)) return
    return new Observe(data)
}

function dependArray (value) {
    for(let i = 0; i < value.length; i ++) {
        let current = value[i]
        current.__ob__ && current.__ob__.dep.depend()
        if(Array.isArray(current)) {
            dependArray(current)
        }
    }
}