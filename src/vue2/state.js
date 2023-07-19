function initState (vm) {
    const opts = vm.$options

    if(opts.props) {
        initProps(vm)
    }
    if(opts.methods) {
        initMethods(vm)
    }
    if(opts.data) {
        initData(vm)
    }
}

function initProps() {}
function initMethods() {}

function proxy (vm, source, key){
    Object.defineProperty(vm, key, {
        get () {
            return vm[source][key]
        },
        set(newValue) {
            vm[source][key] = newValue
        }
    })
}

function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data == 'function' ? data.call(vm) : data
    for(let key in data) {
        proxy(vm, '_data', key)
    }
    // 响应式原理
    callHook(vm, 'beforeCreate')
    observe(data)
}
