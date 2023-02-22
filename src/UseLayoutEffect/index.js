
import { useLayoutEffect, useEffect } from 'react'

function App() {

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    })

    useEffect(() => {
        console.log('useEffect')
    })
    return (
        <div>
            useLayoutEffect
        </div>
    )
}
export default App