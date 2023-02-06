import { Button } from 'antd';
import './index.css'
import TreeData from './components/Tree';

function Home() {
    
    return (
        <div className='main_box'>
            <>
                <Button type="primary" className='mr-10'>新增类别</Button>
                <Button type="primary" className='mr-10'>科学布点</Button>
                <Button type="primary">抽象模型</Button>
                <div className='mt-20'>
                    <TreeData></TreeData>
                </div>
            </>
        </div>
    )
}
export default Home