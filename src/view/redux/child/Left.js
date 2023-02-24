import { connect } from 'react-redux'


function App(props) {
    
    const handleAdd = () => {
        props.add({type: 'counter/add'})
    }
    return <div  className='f-1'>
        <h1>Left</h1>
        <div>{ props.value }</div>
        <button onClick={handleAdd}>click me</button>
    </div>
}
export default connect(
    state => state.count,
    dispatch => ({
        add: params => dispatch(params)
    })
)(App)
