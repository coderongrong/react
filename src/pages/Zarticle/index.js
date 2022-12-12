
import { useState } from 'react'

function Zarticle() {
    
    const [count, setCount] = useState(100)

    return (
        <>
            <div>123</div>
            <div>{ count }</div>
            <button onClick={() => setCount(count + 1)}>count +</button>
        </>
    )
}

export default Zarticle