// import Child from './children'
// import Left from './left'
// import Right from './right'
import { useState, useMemo, useRef } from 'react'

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


function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
        console.log(inputEl.current.value)
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default TextInputWithFocusButton