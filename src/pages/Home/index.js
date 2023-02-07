import { Button } from 'antd';
import './index.css'
import TreeData from './components/Tree';
import TableData from './components/Table';
import ModalInput from './components/Modal';
import { connect } from 'react-redux'
import { useState } from 'react'
import { store } from '../../store/reducer'

function Home(props) {
    console.log('props--------->', props)
    const [_data, setData] = useState('')
    const [show, setShow] = useState(false)
    const cb = (data) => {
        if(data[0]) {
            setData(data[0])
        }
    }
    const showClass = () => {
        console.log('showClass')
        setShow(true)
    }
    const cb2 = (data) => {
        setShow(data)
    }
    const showClassAdd = () => {
        store.dispatch({ type: 'counter/incremented' })
        console.log(store.getState().value, process.env.NODE_ENV)
    }
    const showClassinc = () => {
        store.dispatch({ type: 'counter/decremented' })
        console.log(store.getState().value)
    }
    return (
        <div className='main_box'>
            <div style={{ width: '300px' }}>
                <Button type="primary" className='mr-10' size='small' onClick={showClass}>新增类别</Button>
                <Button type="primary" className='mr-10' size='small' onClick={showClassinc}>科学布点{store.getState().value}</Button>
                <Button type="primary" size='small' onClick={showClassAdd}>抽象模型{store.getState().value}</Button>
                <div className='mt-20 left_tree'>
                    <TreeData callBack={cb}  msg='abc'></TreeData>
                </div>
            </div>
            <TableData data={ _data }/>
            <ModalInput show={show} callback={cb2} />
        </div>
    )
}
export default Home