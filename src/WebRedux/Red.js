import { connect } from 'react-redux'

function Red(props) {
  return (
    <div>
      Red---{props.count}
      <button onClick={props.des}>click me -</button>
    </div>
  )
}

export default connect(
  (state) => {
    return {
      count: state.count.value,
    }
  },
  (dispatch) => {
    return {
      des() {
        dispatch({ type: 'counter/dec' })
      },
    }
  }
)(Red)
