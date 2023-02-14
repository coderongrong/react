import Child from './children'
import Left from './left'
import Right from './right'


function App() {
    return (
        <Child right={<Left></Left>} left={<Right></Right>} />
    )
}

export default App