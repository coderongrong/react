
import { Input, Button, Space, Tag } from 'antd';
import { useState, useRef } from 'react'
import Tabbar from './components/Tabbar'
import { Outlet, Link, useLocation, useNavigate, NavLink, useSearchParams, useParams } from 'react-router-dom'
import Demo from './children/Demo'
import Hellow from './children/hellow';
import { lazy, Suspense } from 'react'
import Sence from '@/infomation/Role/components/Sence.js'
import MyTabbar from '@/components/TabBar'
import MyTable from '@/components/Table'
// import { connect } from 'react-redux'



function Manage(props) {


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

    const [list, setCount] = useState({ a: 1 })
    const handleBtn4 = () => {
        // console.log('handleBtn4')
        // list.push(1)
        console.log({ a: 2 })
        setCount({ a: 2 })
    }

    // return (
    //     <div>
    //         manage
    //         <h1>{list.a}</h1>
    //         <Button type="primary" className='mt-10' onClick={handleBtn4} >Primary Button</Button>
    //         <Tabbar />
    //     </div>
    // )
    const navigate = useNavigate()
    const handle = () => {
        navigate('/manage')
    }
    const handle1 = () => {
        navigate('/manage/hellow')
    }

    // navigate(routerObj[e.key] + '?name=tom&age=18')   // search参数
    //  navigate(routerObj[e.key], { state: 10000 })    // state参数
    // navigate(routerObj[e.key] + '/jack')    // 传递params参数


    // const [search, setsearch] = useSearchParams()
    // console.log('----->', search.get('name'), search.get('age'))

    const state = useLocation()
    // console.log('----> state', useLocation())


    // console.log('useParams --->', useParams())
    const [_data, setData] = useState([{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },])
    const [columns, setColums] = useState([
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser')  color = 'volcano'
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },])
    return (
        <div className='w-100 bc-black p-10'>
            <Sence>
                <MyTabbar title={'管理列表：'} hide={'添加管理数据'} />
                <MyTable data={_data} columns={columns} />
            </Sence>
        </div>)
    return (
        <div className='d-f mr-20'>
            {/* {useLocation().state} */}
            <div className='mr-20'>
                <></>
                {/* <div onClick={handle}>Demo</div>
                <div className='mt-20' onClick={handle1}>Hellow</div> */}
                <NavLink to="/manage">manage</NavLink>
                <NavLink to="/manage/hellow">hellow</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Manage