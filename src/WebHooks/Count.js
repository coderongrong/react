import { useState } from 'react'
import { flushSync } from 'react-dom'

function Count() {
  const [count, setCount] = useState(100)
  console.log('render')
  const [x, setX] = useState(10)
  const handleCount = () => {
    for (let i = 0; i < 10; i++) {
        setX(x => x + 1)
    }
  }
  return (
    <>
      count...
      <h1>{count}</h1>
      <h1>{x}</h1>
      <button onClick={handleCount}>click me</button>
    </>
  )
}

export default Count
