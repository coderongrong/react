import { forwardRef, useEffect, useState, useContext } from 'react'
import ThemeContext from '../../useContext';
import Child from './child'

function App(props, ref) {
    const mycount = useContext(ThemeContext);
    console.log('props mycount ------> ', mycount)

    const [count, setCount] = useState(100)

    useEffect(() => {
        ref.current = count
    }, [count])

    const handleAdd = () => {
        setCount(prev => prev + 100)
    }

    return (
        <div>count-- {count}
            <ThemeContext.Provider value={'xx zzzzzzzzz'}>
                <Child />
            </ThemeContext.Provider>
            <Child />
            <button onClick={handleAdd}>click me</button>
        </div>
    )
}

export default forwardRef(App)