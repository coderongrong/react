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
  // console.log('------>', tagName)
  let element = stact.pop()
  currentParent = stact[stact.length -1]
  if(currentParent) {
    element.parent = currentParent
    currentParent.children.push(element)
  }
}

function parseHTML(html) {
  //循环解析 HTML
  while (html) {
    let textEnd = html.indexOf('<')
    if (textEnd == 0) {
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
    if (textEnd > 0) {
      const text = html.substring(0, textEnd)
      if (text) {
        advance(text.length)
        chars(text)
      }
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

function compileToFunction(template) {
  let root = parseHTML(template)
  console.log(root)
  return function render() {}
}
