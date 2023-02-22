
import { useMemo, useEffect, useState } from 'react'


function App () {

    const [num, setNum] = useState(100)
    const [hob, setHob] = useState(123)
    const handlenum = useMemo(() => {
        console.log('useMemo')
        return num + 100
    }, [num])
    const handlenum1 = useMemo(() => {
        console.log('useMemo')
        return num + 100
    }, [])
    const count = () => {
        console.log('count')
        return 100
    }

    useEffect(() => {
        // console.log('useEfffect')
    })
    const btn = () => {
        setNum(pre => pre + 100)
    }
    const btn2 = () => {
        setHob(pre => pre * 2)
    }
    const btn3 = () => {
        console.log(handlenum)
    }
    return (
        <div>
            useMemo
            <div>num: { handlenum }</div>
            <div>num: { handlenum1 }</div>
            <div>count: { count() }</div>
            <div>count: { count() }</div>
            <button onClick={btn}>clcik me</button>
            <button onClick={btn2}>clcik me</button>
            <button onClick={btn3}>get num</button>
        </div>
    )
}

export default App