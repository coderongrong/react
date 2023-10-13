import { useState, useEffect, createRef, useMemo, memo, useCallback, useContext } from 'react'
import { flushSync } from 'react-dom'
import ThemeContent from './Context.js';

const ChildMemo = memo((props) => {
  console.log('childMemo', props.data);
  const {a, b} = useContext(ThemeContent) 
  return (
    <>
      <div>child----{props.data}</div>
      <h1>{a} -- {b}</h1>
    </>
  )
})

const ChildButton = memo((props) => {
  console.log('props button', props);
  let {a, b} = useContext(ThemeContent)
  const [x, setX] = useState(a) 
  const handleChange = () => {
    // console.log('props', props);
    props.change(100)
    setX(x + 1)
  }
  return (
    <>
      <button onClick={handleChange}>chile button </button>
      <h1>{a} -- {b} -- {x}</h1>
    </>
  )
})
function Count() {
  console.log('th--> ', ThemeContent);
  const [count, setCount] = useState(100)
  console.log('render')
  const [x, setX] = useState(10)
  const handleCount = () => {
    setX(x + 1)
  }
  const box = createRef()
  // useEffect(() => {
  //   console.log('1 effect', box);
  // }, [])
  // useEffect(() => {
  //   console.log('effect');
  //   return () => {
  //     console.log('return');
  //   }
  // })
  const fn = useMemo(() => {

  })
  const change = useCallback((num) => {
    setX(num)
  }, [])
  const handleMemo = () => {
    console.log('memo');
  }
  return (
    <ThemeContent.Provider value={{a: 1, b: 2}}>
      count...
      <h1>{count}</h1>
      <h1 ref={box}>{x}</h1>
      <button onClick={handleCount}>click me</button>
      <ChildMemo data={x} change={change}></ChildMemo>
      <ChildButton change={change}></ChildButton>
    </ThemeContent.Provider>
  )
}

export default Count
