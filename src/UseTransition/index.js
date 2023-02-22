import Spinner from './components/Spinner'
import { useTransition, useState } from 'react'
function App() {
    const [isPending, startTransition] = useTransition()
    const [count, setCount] = useState(0)

    function handleClick() {
        startTransition(() => {
            setCount((c) => c + 1)
        })
    }

    return (
        <div>
            {isPending && <Spinner />}
            {!isPending && <button onClick={handleClick}>{count}</button>}
        </div>
    )
}
export default App
