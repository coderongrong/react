import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

class Store {
  num = 10

  change() {
    this.num++
  }
}

let store = new Store()

// @observer
class Demo extends React.Component {
  render() {
    console.log('render')
    return (
      <div>
        Demo
        <div>store ---- </div>
        <button onClick={() => {}}>click me</button>
      </div>
    )
  }
}

export default Demo
