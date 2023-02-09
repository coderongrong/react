
// import { map } from 'lodash'
import Sence from './components/Sence'
import Tabbar from '@/components/TabBar'
import { connect } from 'react-redux'


function Role(props) {

    return (
        <div className='w-100 bc-black p-10'>
            <Sence>
                <Tabbar title={'角色：'} hide={'添加角色' + props.state.count.value}/>
            </Sence>
        </div>
    )
}

export default connect(
    state => ({ state: state }),
    dispatch => ({
       add: params => dispatch(params),
       des: () => dispatch({type: 'counter/dec'})
    })
)(Role)