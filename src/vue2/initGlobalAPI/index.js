const LIFECYCLE_HOOKS = ['beforeCreate', 'create', 'beforeMount', 'mounted']
const ASSETS_type = ['component', 'directive', 'filter']

let strats = {}

function mergeAssets(parentVal, childVal) {
  const res = Object.create(parentVal)
  console.log('----------->', res)
  if (childVal) {
    for (let key in childVal) {
      res[key] = childVal[key]
    }
  }
  return res
}

strats.components = mergeAssets

LIFECYCLE_HOOKS.forEach((item) => {
  strats[item] = mergeHooks()
})

function mergeHooks(parentVal, childVal) {
  if (childVal) {
    if (parentVal) {
      return parentVal.concat(childVal)
    } else {
      return [childVal]
    }
  } else {
    return parentVal
  }
}
function initGlobalAPI(Vue) {
  Vue.options = {}
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin)
  }
  // Vue.mixin({
  //     a: 1,
  //     beforeCreate(){

  //     }
  // })
  // Vue.mixin({
  //     b: 2,
  //     beforeCreate(){

  //     }
  // })
  // console.log(Vue.options)

  ASSETS_type.forEach((type) => {
    Vue.options[type + 's'] = {}
  })
  Vue.options._base = Vue
  initExtend(Vue)
  initAssetsReg(Vue)
}

function initAssetsReg(Vue) {
  ASSETS_type.forEach((type) => {
    Vue[type] = function (id, definaion) {
      if (type == 'component') {
        // extend
        definaion = this.options._base.extend(definaion)
      }
      if (type == 'directive') {
      }
      if (type == 'filter') {
      }
      this.options[type + 's'][id] = definaion
    }
  })
}

function initExtend(Vue) {
  Vue.extend = function (extendOptions) {
    const Sub = function VueComponent(options) {
      this._init(options)
    }
    Sub.prototype = Object.create(this.prototype)
    Sub.prototype.construtor = Sub
    Sub.options = mergeOptions(this.options, extendOptions)
    return Sub
  }
}

function mergeOptions(parent, child) {
  const options = {}
  for (let key in parent) {
    mergeField(key)
  }
  for (let key in child) {
    if (!parent.hasOwnProperty(key)) {
      mergeField(key)
    }
  }

  function mergeField(key) {
    if (typeof parent[key] == 'object' && typeof child[key] == 'object') {
      options[key] = {
        ...parent[key],
        ...child[key],
      }
    } else if (child[key] == null) {
      options[key] = parent[key]
    } else {
      options[key] = child[key]
    }
  }
  return options
}
