import { useMemo } from 'react'


function App(props) {
    // console.log('re-render')
    return (
        <div>
            {props.left}
            {props.right}
        </div>
    )
}

export default App