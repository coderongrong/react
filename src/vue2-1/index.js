// Regular Expressions for parsing tags and attributes
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const dynamicArgAttribute =
  /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
const startTagClose = /^\s*(\/?)>/
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g
const doctype = /^<!DOCTYPE [^>]+>/i
// #7298: escape - to avoid being passed as HTML comment when inlined in page
const comment = /^<!\--/
const conditionalComment = /^<!\[/

let root = null
let currentParent
let stact = []
const ELEMENT_type = 1
const TEXT_type = 3

function createASTElement(tagName, attrs) {
  return {
    tag: tagName,
    type: ELEMENT_type,
    children: [],
    attrs,
    parent: null,
  }
}

function chars(text) {
  text = text.trim()
  if (text) {
    currentParent.children.push({
      text,
      type: TEXT_type,
    })
  }
}

function start(tagName, attrs) {
  let element = createASTElement(tagName, attrs)
  if (!root) {
    root = element
  }
  currentParent = element
  stact.push(element)
}

function end(tagName) {
  let element = stact.pop()
  currentParent = stact[stact.length - 1]
  if (currentParent) {
    element.parent = currentParent
    currentParent.children.push(element)
  }
}

function parseHTML(html) {
  //循环解析 HTML
  while (html) {
    let textEnd = html.indexOf('<')
    if (textEnd == 0) {
      // 开始标签
      let startTagMatch = parseStartTag()
      if (startTagMatch) {
        start(startTagMatch.tag, startTagMatch.attrs)
        continue
      }
      let endTagMatch = html.match(endTag)
      if (endTagMatch) {
        advance(endTagMatch[0].length)
        end(endTagMatch[1])
        continue
      }
    }
    let text
    if (textEnd >= 0) {
      // 结束标签
      text = html.substring(0, textEnd)
    }
    if (text) {
      advance(text.length)
      chars(text)
    }
  }
  function advance(n) {
    html = html.substring(n)
  }
  function parseStartTag() {
    let start = html.match(startTagOpen)
    if (start) {
      const match = {
        tag: start[1],
        attrs: [],
      }
      advance(start[0].length)
      let end, attr
      while (
        !(end = html.match(startTagClose)) &&
        (attr = html.match(attribute))
      ) {
        advance(attr[0].length)
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5],
        })
      }
      if (end) {
        advance(end[0].length)
        return match
      }
    }
  }
  return root
}
function genProps(attrs) {
  let str = ''
  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i]
    if (attr.name == 'style') {
      let obj = {}
      attr.value.split(';').forEach((item) => {
        let [key, value] = item.split(':')
        obj[key] = value
      })
      attr.value = obj
    }
    str += `${attr.name}: ${JSON.stringify(attr.value)},`
  }

  return `{${str.slice(0, -1)}}`
}

function genChildren(el) {
  const children = el.children
  if (children?.length > 0) {
    return `${children.map((c) => gen(c)).join(',')}`
  } else {
    return false
  }
}

function gen(node) {
  if (node.type == 1) {
    return generate(node)
  } else {
    let text = node.text
    let tokens = []
    let match, index
    let lastIndex = (defaultTagRE.lastIndex = 0)
    while ((match = defaultTagRE.exec(text))) {
      index = match.index
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)))
      }
      tokens.push(`_s(${match[1].trim()})`)
      lastIndex = index + match[0].length
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)))
    }
    return `_v(${tokens.join('+')})`
  }
}

function generate(el) {
  let code = `_c('${el.tag}', ${
    el.attrs.length ? genProps(el.attrs) : 'undefined'
  },${genChildren(el).length > 0 ? `${genChildren(el)}` : ''})
  `
  return code
}

function compileToFunction(template) {
  let root = parseHTML(template)
  console.log(root)
  let code = generate(root) // ast 树
  return new Function(`with(this){return ${code}}`)
}

class Vue {
  constructor(options) {
    this._init(options)
  }

  _init(options) {
    const vm = this
    vm.$options = options

    // 对数据做处理
    initState(vm)

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }

  $mount(el) {
    const vm = this
    el = document.querySelector(el)
    if (!this.$options.render) {
      let template = vm.$options.template
      if (!template && el) {
        template = el.outerHTML
      }
      const render = compileToFunction(template)
    }
  }
}

// function compileToFunction(template) {
//     console.log(template)
// }

function initState(vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = typeof data === 'function' ? data.call(vm) : data
  vm._data = data

  // 对对象的劫持    MVVM 数据变化
  observe(data)
}

function isObject(obj) {
  return typeof obj == 'object' && obj != null
}

let oldArrayMethods = Array.prototype
let arrayMethods = Object.create(oldArrayMethods)

const methods = ['pop', 'push', 'shift', 'unshift', 'sort', 'reverse', 'splice']
methods.forEach((method) => {
  arrayMethods[method] = function (...arg) {
    console.log('push 方法')
    const result = oldArrayMethods[method].apply(this, arg)
    let inserted
    let ob = this.__ob__
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = arg
        break
      case 'splice':
        inserted = arg.slice(2)
    }
    if (inserted) ob.observeArr(inserted)
    return result
  }
})

class Observe {
  constructor(data) {
    Object.defineProperty(data, '__ob__', {
      enumerable: false,
      configurable: false,
      value: this,
    })
    if (Array.isArray(data)) {
      data.__proto__ = arrayMethods
      this.observeArr(data)
    } else {
      this.walk(data)
    }
  }

  observeArr(value) {
    value.forEach((item) => observe(item))
  }

  walk(data) {
    for (let key in data) {
      definreatice(data, key, data[key])
    }
  }
}

function definreatice(data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      console.log('get')
      return value
    },
    set(newVal) {
      if (newVal == value) return
      observe(newVal)
      value = newVal
    },
  })
}
function observe(data) {
  if (!isObject(data)) return
  return new Observe(data)
}
