class Vue {
  constructor(options) {
    this._init(options)
  }

  _init(options) {
    const vm = this
    vm.$options = options
    initState(vm)

    if(vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
  }
  $mount(el) {
    const vm = this
    const options = vm.$options
    el = document.querySelector(el)

    if(!options.render) {
        let template = options.template
        if(!template && el) {
            template = el.outerHTML
        }
        const render = compileToFunction(template)
        options.render = render
    }
  }
}
