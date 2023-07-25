class Vue {
  constructor(options) {
    this._init(options)
  }

  _init(options) {
    
    const vm = this
    
    vm.$options = mergeOptions(vm.constructor.options, options)

    initState(vm)
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }

  $mount(el) {
    // 挂载组件
    const vm = this
    const options = vm.$options
    
    el = document.querySelector(el)  // 对象 {}
    if (!options.render) {
      let template = options.template
      if (!template && el) {
        template = el.outerHTML
      }
      const render = compileToFunction(template)

      options.render = render 
    }


    // console.log(vm, el)

    mountComponent(vm, el)
  }

  _render() {
    const { render } = this.$options
    
    // 返回虚拟dom
    let vnode = render.call(this)
    return vnode
  }

  _updata(vnode) {
    const vm = this
    
    // 虚拟dom 转化为真实dom
    vm.$el = patch(vm.$el, vnode)
  }

  _c() {
    return _createElement(this, ...arguments)
  }
  _v(text) {
    return createTextVNode(this, text)
  }
  _s(val) {
    return val == null ? '' : (typeof val == 'object' ? JSON.stringify(val) : val)
  }

  $nextTick = nextTick
}

initGlobalAPI(Vue)
