import Child from './children'
import Left from './left'
import Right from './right'


function App() {
    const a = 1;
    const b = 2;
    return (
        <Child right={<Left a={a} />} left={<Right b={b} />} />
    )
}

export default App