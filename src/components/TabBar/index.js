

import './index.css'
import { Input, Button } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'

function TabBar(props) {
    const handlBtn = () => {
        props.add()
    }
    return (
        <div className='w-100 main_bc p-10' onClick={props.onClick}>
            <div className='d-f'>
                <div style={{ width: '100px', height: '30px', lineHeight: '30px' }}>{props.title || '其他费用模块:'}</div>
                <Input placeholder="请输入其他费用模块" style={{ width: '300px', height: '30px' }} className='mr-10' />
                <Button type="primary" className='mr-10' icon={<SearchOutlined />} onClick={handlBtn} >查询</Button>
                <Button type="primary" icon={<UndoOutlined />}>重置</Button>
            </div>
            {
                props.hide && <div className='mr-10 mt-10' onClick={() => props.des()}><Button type="primary"> <span className='mr-10'>+</span>{props.hide || '添加其他设备'}</Button></div>
            }
        </div>
    )
}

export default connect(
    state => ({ state }),
    dispatch => ({
        add: () => dispatch({ type: 'counter/add' }),
        des: () => dispatch({ type: 'counter/dec' })
    })
)(TabBar)