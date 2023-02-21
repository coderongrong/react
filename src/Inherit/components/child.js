import { forwardRef, useEffect, useState, useContext} from 'react'
import ThemeContext from '../../useContext';

function App (props) {
    const mycount = useContext(ThemeContext);

    const [count, setCount] = useState(100)
    return (
        <div>child-- { count }
        mycount: { mycount }
        </div>
    )
}

export default App