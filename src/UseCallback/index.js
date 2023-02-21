
import { useCallback, useEffect, useState } from 'react'

import Child from './child'

function App () {
    // console.log('parent')
    const [count, setCount] = useState(0)
    const fn1 = useCallback(() => {
        console.log('fn1')
    })

    const fn2 = () => {
        console.log('fn2')
    }

    useEffect(() => {
        // fn1()
        // fn2()
    }, [count])
    const handleClcik = () => {
        setCount(pre => pre + 1)
    }

    const getCount = useCallback(() => {
        console.log(count)
    }, [count])
    
    return (
        <div>
            useCallback
            <div>{ count }</div>
            <button onClick={getCount}>get count</button>
            <div onClick={handleClcik}>click me </div>
            <Child />
        </div>
    )
}

export default App