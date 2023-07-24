function isReserTag(tagName) {
  let str = 'p,div,spam,input,button'
  let obj = {}
  str.split(',').forEach((tag) => {
    obj[tag] = true
  })

  return obj[tagName]
}

function createElement(vm, tag, data = {}, ...children) {
  let key = data.key
  if (key) {
    delete data.key
  }
  if (isReserTag(tag)) {
    return vnode(tag, data, key, children, undefined)
  } else {
    let Ctor = vm.$options.components[tag]
    return createComponent(vm, tag, data, key, children, Ctor)
  }
}

function createComponent(vm, tag, data, key, children, Ctor) {
  if (isObj(Ctor)) {
    Ctor = vm.$options._base.extend(Ctor)
  }
  data.hook = {
    init(vnode) {
      if(Ctor) {
        let child = (vnode.componentInstance = new Ctor({ _isComponent: true }))
        child.$mount()
      }
    },
  }

  return vnode(`vue-components-${Ctor.cid}-${tag}`, data, key, undefined, {
    Ctor,
    children,
  })
}

function createTextVNode(vm, text) {
  return vnode(undefined, undefined, undefined, undefined, text)
}

function vnode(tag, data, key, children, text, componentOptions) {
  return {
    tag,
    data,
    key,
    children,
    text,
    componentOptions,
  }
}
