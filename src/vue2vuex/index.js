class Store {
  constructor(options) {
    this.options = options
    this.state = options.state
    this.getters = options.getters
    this.getters = {}
    const computed = {}

    Object.keys(options.getters).forEach((key) => {
      computed[key] =  () => {
        return options.getters[key](this.state)
      }
      Object.defineProperty(this.getters, key, {
        get: () => {
          return this._vm[key]
        },
      })
    })

    this._vm = new Vue({
      data: {
        $$state: options.state, // 在data中定义 $$xxx, 在实例中是获取不到该值的，被保护起来了。可以通过 this.$data.$$state获取
      },
      computed,
    })

    this.commit = (type, payload) => {
      options['mutations'][type](this.state, payload)
    }
  }

  dispatch(type, payload) {
    this.options['actions'][type].call(this, this, payload)
  }
}

let Vuex = {
  Store,
}

Vuex.install = function (_Vue) {
  _Vue.mixin({
    beforeCreate() {
      // this执行vue实例
      if (this.$options.store) {
        // 说明是根Vue，实例化中传入的参数
        _Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default Vuex
