
// import { map } from 'lodash'
import Sence from './components/Sence'
import Tabbar from '@/components/TabBar'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Button } from 'antd';
import { callBack, useEffect, memo } from 'react'
function Role() {
    const { message } = useSelector((state) => {
        return {
            message: state.count.value
        }
    }, shallowEqual)

    const dispatch = useDispatch()

    const handleBtn3 = () => {
        dispatch({ type: 'counter/dec' })
    }
    const handleEqual = () => {
        dispatch({ type: 'counter/equal' })
    }
    const handleCkick = () => {
        console.log('handleCkick')
    }
    
    // const fun1 = useCallBack(() => {
    //     console.log('示例一函数');
    // },[])


    const fn2 = () => {
        console.log('fn2')
        console.log(callBack, memo)
    }

    useEffect(() => {
        handleCkick()
        // fun1()
        fn2()
    }, [])
    return (
        <div className='w-100 bc-black p-10'>
            {/* <Button type="primary" className='mt-10' onClick={handleBtn3} >Primary Button</Button>
            <Button type="primary" className='mt-10' onClick={handleEqual} >Primary equal</Button> */}
            <Sence>
                <Tabbar title={'角色：'} hide={'添加角色'} />
            </Sence>
        </div>
    )
}

export default Role

// export default connect(
//     state => ({ state: state }),
//     dispatch => ({
//         add: params => dispatch(params),
//         des: () => dispatch({ type: 'counter/dec' })
//     })
// )(Role)