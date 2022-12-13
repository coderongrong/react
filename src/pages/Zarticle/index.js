
import { useState, useEffect  } from 'react'

function Zarticle() {
    
    const [count, setCount] = useState(100)
    useEffect(() => {
        console.log('useEffect')
    }, [])
    return (
        <>
            <div>123</div>
            <div>{ count }</div>
            <button onClick={() => setCount(count + 1)}>count +</button>
        </>
    )
}

export default Zarticle