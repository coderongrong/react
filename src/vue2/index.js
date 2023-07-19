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
    const vm = this
    const options = vm.$options
    el = document.querySelector(el)
    if (!options.render) {
      let template = options.template
      if (!template && el) {
        template = el.outerHTML
      }
      const render = compileToFunction(template)
      options.render = render
    }
    mountComponent(vm, el)
  }

  _render() {
    const { render } = this.$options
    const vnode = render.call(this)
    return vnode
  }

  _updata(vnode) {
    const vm = this
    vm.$el = patch(vm.$el, vnode)
  }

  _c() {
    return createElement(...arguments)
  }
  _v(text) {
    return createTextVNode(text)
  }
  _s(val) {
    return val == null ? '' : (typeof val == 'object' ? JSON.stringify(val) : val)
  }

  $nextTick = nextTick
}

initGlobalAPI(Vue)
