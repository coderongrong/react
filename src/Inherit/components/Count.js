import { forwardRef, useEffect, useState, useContext} from 'react'
import ThemeContext from '../../useContext';

function App (props, ref) {
    const mycount = useContext(ThemeContext);
    const themeCount = useContext(ThemeContext)
    console.log('props mycount ------> ',mycount, themeCount)

    const [count, setCount] = useState(100)

    useEffect(() => {
        ref.current = count
    }, [count])
    
    const handleAdd = () => {
        setCount(prev => prev + 100)
    }

    return (
        <div>count-- { count }
            <button onClick={handleAdd}>click me</button>
        </div>
    )
}

export default forwardRef(App)