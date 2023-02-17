// import Child from './children'
// import Left from './left'
// import Right from './right'
import { useState, useMemo, useRef, useCallback, useEffect, useContext } from 'react'
import Count from './components/Count'
import ThemeContext from '@/useContext'
import useNumber from '@/Hook/Number'

// function App() {
//     const a = 1;
//     const b = 2;
//     const [count, setCount] = useState(10)
//     const [counts, setCounts] = useState(10)

//     const handleClick = () => {
//         // console.log('xxxxx')
//         setCount(count + 1)
//         setCounts(counts + 1)
//     }

//     const _count = useMemo(() => {
//         console.log(' cout ')
//         return count * 2
//     }, [count])
//     const count2 = () => {
//         console.log(' cout2 ')
//         return count * 2
//     }

//     return (
//         <>
//             <button onClick={handleClick}>click me</button>
//             <h4>{ _count }---{ count2() }</h4>
//             <Child right={<Left a={a} b={count} />} left={<Right b={b} />} />
//         </>
//     )
// }

// export default App

// var ReactCurrentDispatcher = {
//     /**
//      * @internal
//      * @type {ReactComponent}
//      */
//     current: null
// };

// console.log(ReactCurrentDispatcher.current)

// function resolveDispatcher() {
//     var dispatcher = ReactCurrentDispatcher.current;

//     {
//         if (dispatcher === null) {
//             console.log('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
//         }
//     } // Will result in a null access error if accessed outside render phase. We
//     // intentionally don't throw our own error because this is in a hot path.
//     // Also helps ensure this is inlined.

//     console.log(dispatcher)
//     return dispatcher;
// }

// function _useCallback(callback, deps) {
//     var dispatcher = resolveDispatcher();
//     console.log(dispatcher)
//     return  //dispatcher._useCallback(callback, deps);
// }

// _useCallback()


function App() {

    const [count, setCount] = useState(60)
    const timerId = useRef(null)

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(pre => pre - 1)
        }, 1000)
    }

    const handleStop = () => {
        if (timerId) clearInterval(timerId.current)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
    )
}


function TextInputWithFocusButton() {
    console.log(' render ')
    const [count, setCount] = useState(0)
    const [numb, setnumb] = useState(0)

    const countRef = useRef(null)   
    const donDiv = useRef(null)
    const [aNumber, setANumber] = useNumber()
    const themeCount = useContext(ThemeContext)

    const onButtonClick = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const getCount = useCallback(() => {
        console.log(count)
    }, [count])

    const res = useMemo(() => {
        console.log('memo count')
        return count + 5
    }, [count])

    useEffect(() => {
        getCount()
        // console.log(countRef)
        // console.log('donDiv', donDiv)
        // console.log('themeCount', themeCount)
        console.log('aNumber', aNumber)
    }, [])

    const getnum = useCallback(() => {
        setnumb(numb + 1)
    }, [numb])

    const _getnum = useCallback(() => {
        console.log(numb)
    }, [numb])

    const handleChangde = () => {
        console.log('countRef', countRef)
    }
    return (
        <ThemeContext.Provider value={'xx prov'}>
            <div>count: {count}</div>
            <div>count - res: {res}</div>
            <div ref={donDiv}>numb: {numb}</div>
            <button onClick={onButtonClick}>Focus the input</button>
            <button onClick={getCount}>get count</button>
            <button onClick={getnum}>change num</button>
            <button onClick={_getnum}>get num</button>
            <Count ref={countRef} />
            <button onClick={handleChangde}>click me</button>
        </ThemeContext.Provider>
    );
}

export default TextInputWithFocusButton