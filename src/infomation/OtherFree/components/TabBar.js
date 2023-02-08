import './index.css'
import { Input, Button } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';

function TabBar() {

    return (
        <div className='d-f w-100 main_bc p-10 h-100'>
            <div className='d-f'>
                <div style={{ width: '100px', height: '30px', lineHeight: '30px' }}>其他费用模块:</div>
                <Input placeholder="请输入其他费用模块" style={{ width: '300px', height: '30px' }} className='mr-10' />
                <Button type="primary" className='mr-10' icon={<SearchOutlined />}>查询</Button>
                <Button type="primary" icon={<UndoOutlined />}>重置</Button>
            </div>
        </div>
    )
}

export default TabBar