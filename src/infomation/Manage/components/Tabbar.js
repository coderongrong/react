

import { memo } from 'react'


function Tabbar(props) {
    console.log('Tabbar', props)
    return (
        <div>
            Tabbar
            {/* <div className='red'>{props.count}</div> */}
        </div>
    )
}

export default memo(Tabbar)