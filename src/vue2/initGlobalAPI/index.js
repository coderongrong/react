const LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted']
const ASSETS_type = [
  'component',
  'directive',
  'filter'
]

let strats = {}

function mergeAssets(parentVal, childVal) {
  const res = Object.create(parentVal)
  if (childVal) {
    for (let key in childVal) {
      res[key] = childVal[key]
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach((item) => {
  strats[item] = mergeHooks
})

strats.components = mergeAssets

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

  ASSETS_type.forEach((type) => {
    Vue.options[type + 's'] = {}
  })

  Vue.options._base = Vue

  initExtend(Vue)
  initAssetsReg(Vue)
}

function initAssetsReg(Vue) {
  ASSETS_type.forEach((type) => {
    Vue[type] = function (id, definition) {
      if (type == 'component') {
        // extend
        definition = this.options._base.extend(definition)
      } else if (type == 'directive') {

      } else if (type == 'filter') {

      } 
      this.options[type + 's'][id] = definition
    }
  })
}

function initExtend(Vue) {
  let cid = 0
  Vue.extend = function (extendOptions) {
    // console.log(extendOptions)
    const Sub = function VueComponent(options) {
      this._init(options)
    }
    Sub.cid = cid++
    Sub.prototype = Object.create(this.prototype)
    Sub.prototype.constructor = Sub  // constructor
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
    if (strats[key]) {
      return (options[key] = strats[key](parent[key], child[key]))
    }
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
