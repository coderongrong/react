
import { useRef } from 'react'


function App() {

    const inp = useRef()

    const handlebtn = () => {
        console.log('btn', inp.current.focus())
    }
    return (
        <div>
            useref
            <div><input ref={ inp } /></div>
            <button onClick={handlebtn}>click me</button>
        </div>
    )
}
export default App