import React from 'react'
import { Table } from 'antd'

import { getRootlist } from '@/api/tree.js'
import { useEffect, useState } from 'react'
import TabBar from './TabBar.js'
import './index.css'
import { connect } from 'react-redux'
import { useContext } from 'react'
import ThemeContext from '@/useContext/index.js'

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: (text, tag, index) => {
            return <a>{index}</a>
        },
    },
    {
        title: '产品名称',
        dataIndex: 'productClassName',
        key: 'productClassName',
        render: (text) => <div>{text}</div>,
    },
    {
        title: '上传人',
        dataIndex: 'createBy',
        key: 'createBy',
        render: (text) => <div>{text}</div>,
    },
    {
        title: '上传时间',
        dataIndex: 'createTime',
        key: 'createTime',
        render: (text) => <div>{text}</div>,
    },
    {
        title: '审核状态',
        dataIndex: 'status',
        key: 'status',
        render: (text) => <div>{text}</div>,
    },
    {
        title: '编辑',
        dataIndex: 'edit',
        key: 'edit',
        render: (text) => <a>编辑</a>,
    },
    {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
        render: (text) => <a>详情</a>,
    },
    {
        title: '删除',
        dataIndex: 'delete',
        key: 'delete',
        render: (text) => <a>删除</a>,
    },
    // {
    //     title: 'Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: (text) => <a>{text}</a>,
    // },
    // {
    //     title: 'Age',
    //     dataIndex: 'age',
    //     key: 'age',
    // },
    // {
    //     title: 'Address',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {Array.isArray(tags) && tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
]

const data = [
    {
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
    },
]

const TableData = (props) => {
    let count = useContext(ThemeContext)

    const [myCount, setMyCount] = useState(count)

    const [tableData, setTableData] = useState(data)
    useEffect(() => {
        fn()
    }, [props.data])
    const fn = async () => {
        const params = {
            productClassId: props.data || 1601050155552403457,
            order: 'desc',
            pageNo: 1,
            pageSize: 10,
        }
        const { result } = await getRootlist(params)
        const _data = result.records.map((item) => {
            return {
                ...item,
                key: item.id,
            }
        })
        setTableData(_data)
    }
    const change = () => {
        props.changeNum({ type: 'counter/incremented' })
        props._push({ type: 'book/push' })
    }
    useEffect(() => {
        count = myCount
        // console.log(count)
    }, [myCount])
    const dart = (e) => {
        e.stopPropagation()
        setMyCount((pre) => pre + 100)
    }
    const onhandle = (value) => {
        setMyCount(value)
    }
    return (
        <div style={{ width: '80%', padding: '0 0 0 20px' }}>
            <ThemeContext.Provider value={myCount}>
                <TabBar onhandle={onhandle} />
                <div className="text_num">
                    已选择 {props.count.value}--{props.books.value}项{' '}
                    <span onClick={change}>
                        清空已选删除
                        <span>context: {myCount}</span>
                        <button onClick={dart}>click me</button>
                    </span>
                </div>
                <Table columns={columns} dataSource={tableData} />
            </ThemeContext.Provider>
        </div>
    )
}

export default connect(
    (state) => state,
    (dispatch) => ({
        changeNum: (params) => dispatch(params),
        _push: (params) => dispatch(params),
        reset: (params) => dispatch(params),
    })
)(TableData)
