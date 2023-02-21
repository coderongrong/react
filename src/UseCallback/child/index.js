
import { memo, useState } from 'react'

function App () {
    console.log('child')
    const [num, setNum] = useState(10)

    const handleChild = () => {
        // console.log('handleChild')
        setNum(pre => pre + 1)
    }
    return (
        <div>
            child
            <h2>{ num }</h2>
            <div onClick={handleChild}>handle child</div>
        </div>
    )
}

export default App