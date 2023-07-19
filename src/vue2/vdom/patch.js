function patch(oldVnode, vnode) {
  // 更新还是渲染
  const isRealElement = oldVnode.nodeType
  if (isRealElement) {
    const oldElm = oldVnode
    const parentElm = oldElm.parentNode
    let el = createElm(vnode)
    parentElm.insertBefore(el, oldElm.nextSibling)
    parentElm.removeChild(oldElm)
    return el
  }
}

function createElm(vnode) {
  let { tag, children, key, data, text } = vnode
  if (typeof tag == 'string') {
    vnode.el = document.createElement(tag)
    updataProps(vnode)
    children.forEach((item) => {
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
