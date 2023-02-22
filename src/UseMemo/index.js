
import { useMemo, useEffect, useState } from 'react'


function App () {

    const [num, setNum] = useState(100)
    const [hob, setHob] = useState(123)
    const handlenum = useMemo(() => {
        console.log('useMemo')
        return num + 100
    }, [num])
    const count = () => {
        console.log('count')
        return 100
    }

    useEffect(() => {
        // console.log('useEfffect')
    })
    const btn = () => {
        setNum(pre => pre + 10)
    }
    const btn2 = () => {
        setHob(pre => pre * 2)
    }
    return (
        <div>
            useMemo
            <div>num: { handlenum }</div>
            <div>num: { handlenum }</div>
            <div>count: { count() }</div>
            <div>count: { count() }</div>
            <button onClick={btn}>clcik me</button>
            <button onClick={btn2}>clcik me</button>
        </div>
    )
}

export default App