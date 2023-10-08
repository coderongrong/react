import { connect } from 'react-redux'
function Blue(props) {
  const { add, count } = props
  const handleBtn = () => {
    add()
  }
  return (
    <div>
      blue -- {count}
      <button onClick={handleBtn}>click me +</button>
    </div>
  )
}

function deley() {
  return new Promise((res) => {
    setTimeout(res, 1000)
  })
}

export default connect(
  (state) => {
    return { count: state.count.value }
  },
  (dispatch) => {
    return {
      async add() {
        dispatch({ type: 'counter/add' })
      },
    }
  }
)(Blue)

/*
*
connect(mapStateToProps, mapDispathToProps)
fn：mapStateToProps 可以获取redux的公共状态
**/
