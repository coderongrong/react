
import { Input, Button } from 'antd';
import { useState, useRef } from 'react'
import Tabbar from './components/Tabbar'


function Manage(props) {
    // console.log('Manage', props)
    const [key, setKey] = useState(false)
    const [input, setInput] = useState('')
    const [input1, setInput1] = useState('')
    const _ref = useRef()

    const handleBtn = () => {
        console.log('handleBtn', input)
    }
    const handleBtn1 = () => {
        console.log('handleBtn --->', _ref.current.value)
    }
    const handleBtn2 = () => {
        console.log('handleBtn --->', input1)
    }
    const ele =
        <div className='p-10'>
            <Input placeholder="Basic usage" value={input} onChange={(e) => setInput(e.target.value)} />
            <Button type="primary" className='mt-10' onClick={handleBtn} >Primary Button</Button>
            <br />
            {/* 非受控组件 */}
            <input ref={_ref} className='mt-10' />
            <br />
            <Button type="primary" className='mt-10' onClick={handleBtn1} >Primary Button</Button>
            <br />
            {/* 受控组件 */}
            <input value={input1} onChange={(e) => setInput1(e.target.value)} className='mt-10' />
            <br />
            <Button type="primary" className='mt-10' onClick={handleBtn2} >Primary Button</Button>
        </div>

    const _min = useRef()
    const handleBtn3 = (e) => {
        // console.log(_min.current.value)
    }
    const onChangeTwo = (e) => {
        console.log(e.target.value)
    }
    const app =
        <div className='p-10'>
            <input placeholder="Basic usage" onChange={onChangeTwo} />
            <Button type="primary" className='mt-10' onClick={handleBtn} >Primary Button</Button>
            <input ref={_min} />
            <Button type="primary" className='mt-10' onClick={handleBtn3} >Primary Button</Button>
        </div>



    const [count, setCount] = useState(100)
    const handleBtn4 = () => {
        // console.log('handleBtn4')
        setCount(count + 1)
    }

    return (
        <div>
            manage
            <h1>{count}</h1>
            <Button type="primary" className='mt-10' onClick={handleBtn4} >Primary Button</Button>
            <Tabbar count={count} />
        </div>
    )
}

export default Manage