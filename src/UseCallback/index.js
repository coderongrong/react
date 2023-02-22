import { useCallback, useState } from 'react'

import Child from './child'

function App() {
    // console.log('parent')

    const [count, setCount] = useState(0)

    const [num, setNum] = useState(10)

    const handleClcik = () => {
        setCount((pre) => pre + 1)
    }

    const getCount = useCallback(() => {
        console.log(count)
    }, [num])

    const handleClcikNow = () => {
        console.log(count)
    }

    const handleNum = () => {
        setNum((pre) => pre + 1)
    }
    return (
        <div>
            useCallback
            <div>{count}</div>
            <div>{num}</div>
            <button onClick={getCount}>get count</button>
            <button onClick={handleClcik}>click me </button>
            <button onClick={handleClcikNow}>Now me </button>
            <br />
            <button onClick={handleNum}>click Num</button>
            <Child />
        </div>
    )
}

export default App
