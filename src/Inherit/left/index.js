
import { useCallback } from "react"


function App(props) {
    // console.log('Left', props)

    const memoizedCallback = useCallback(
        () => {
            console.log(props.a, props.b);
        },
        [props.a, props.b],
    );

    return (
        <div>left -- {props.a}---{props.b}</div>
    )
}

export default App