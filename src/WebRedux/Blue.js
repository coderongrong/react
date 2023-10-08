import { connect } from 'react-redux'
function Blue(props) {

  const handleBtn = () => {
    props.add()
  }
  return (
    <div>
      blue -- {props.count}
      <button onClick={handleBtn}>click me +</button>
    </div>
  )
}

export default connect(
  (state) => {
    return { count: state.count.value }
  },
  (dispatch) => {
    return {
      add() {
        dispatch({type: 'counter/add'})
      },
    }
  }
)(Blue)

/*
*
connect(mapStateToProps, mapDispathToProps)
fn：mapStateToProps 可以获取redux的公共状态
**/
