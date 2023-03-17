import { Button } from 'antd';
import './index.css'
import TreeData from './components/Tree';
import TableData from './components/Table';
import ModalInput from './components/Modal';
import { useState } from 'react'

function Home() {


    // console.log('home')
    // const { todos, onTodoClick } = props
    const [_data, setData] = useState('')
    const [show, setShow] = useState(false)


    const cb = (data) => {
        if (data[0]) {
            setData(data[0])
        }
    }
    const showClass = () => {
        setShow(true)
    }
    const cb2 = (data) => {
        setShow(data)
    }
    const showClassdec = () => {
        // onTodoClick({ type: 'counter/decremented' })
    }
    const showClassAdd = () => {
        // onTodoClick({ type: 'counter/incremented' })
    }
    return (
        <div className='main_box'>
            <div style={{ width: '300px' }}>
                <Button type="primary" className='mr-10' size='small' onClick={showClass}>新增类别</Button>
                <Button type="primary" className='mr-10' size='small' onClick={showClassdec}>科学布点</Button>
                <Button type="primary" size='small' onClick={showClassAdd}>抽象模型</Button>
                <div className='mt-20 left_tree'>
                    <TreeData callBack={cb} msg='abc'></TreeData>
                </div>
            </div>
            <TableData data={_data} />
            <ModalInput show={show} callback={cb2} />
        </div>
    )
}

export default Home

