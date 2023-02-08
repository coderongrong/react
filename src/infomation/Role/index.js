
// import { map } from 'lodash'
import Sence from './components/Sence'
import Page from './components/Page'
import Tabbar from '@/components/TabBar'
function Role() {
    return (
        <div className='w-100 bc-black p-10'>
            <Sence>
                <Tabbar title={'角色：'} hide={'添加角色'} />
            </Sence>
        </div>
    )
}

export default Role