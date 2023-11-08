function patch(oldVnode, vnode) {
  // 更新还是渲染
  
  if (!oldVnode) {
    //组件挂载
    return createElm(vnode)
  } else {
    const isRealElement = oldVnode.nodeType
    if (isRealElement) {
      const oldElm = oldVnode
      const parentElm = oldElm.parentNode

      // 虚拟dom 转化为真是dom
      let el = createElm(vnode)

      parentElm.insertBefore(el, oldElm.nextSibling)
      parentElm.removeChild(oldElm)
      return el
    }
  }
}

function _createComponent(vnode) {
  //创建组件的实例
  let i = vnode.data
  if ((i = i.hook) && (i = i.init)) {
    i(vnode)
  }
  if (vnode.componentInstance) {
    return true
  }
}

function createElm(vnode) {
  // return
  let { tag, children, key, data, text } = vnode
  if (typeof tag == 'string') {
    if (_createComponent(vnode)) {
      // 判断是否是组件
      return vnode.componentInstance.$el
    }
    vnode.el = document.createElement(tag)
    updataProps(vnode)
    children?.forEach((item) => {
      console.log('children', item)
      return vnode.el.appendChild(createElm(item))
    })
  } else {
    vnode.el = document.createTextNode(text)
  }
  return vnode.el
}

function updataProps(vnode) {
  let newProp = vnode.data
  let el = vnode.el
  for (let key in newProp) {
    if (key == 'style') {
      for (let styleName in newProp.style) {
        el.style[styleName.trim()] = newProp.style[styleName]
      }
    } else if (key == 'class') {
      el.className = newProp.class
    } else {
      el.setAttribute(key, newProp[key])
    }
  }
}
