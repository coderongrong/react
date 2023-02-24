
import { connect } from 'react-redux'

function App(props) {
    const handleDes = () => {
        props.des({type: 'counter/dec'})
    }
    return <div  className='f-1'>
        <h1>right</h1>
        <div>{ props.count.value }</div>
        <button onClick={handleDes}>click me</button>
    </div>
}
export default connect(
    state => state,
    dispatch => ({
        des: params => dispatch(params)
    })
)(App)
