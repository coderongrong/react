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
function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data == 'function' ? data.call(vm) : data

    // 响应式原理
    observe(data)
}
