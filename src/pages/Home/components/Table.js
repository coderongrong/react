import React from 'react'
import { Table, Modal } from 'antd'

import { getRootlist } from '@/api/tree.js'
import { useEffect, useState } from 'react'
import TabBar from './TabBar.js'
import './index.css'
import { connect } from 'react-redux'
import { useContext,useRef } from 'react'
import ThemeContext from '@/useContext/index.js'
import MkInput from '../children/MkInput/index.js'

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


  const ref = useRef()
  const [myCount, setMyCount] = useState(count)
  const [isOpen, setIsIoen] = useState(false)
  const [tableData, setTableData] = useState(data)
  const [inputData, setData] = useState([])
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
  const handleEdit = (records) => {
    setIsIoen(true)
    setData(records.paramInfos)
  }
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
      render: (_, records) => {
        return (
          <>
            <a onClick={() => handleEdit(records)}>编辑</a>
          </>
        )
      },
    },
    {
      title: '详情',
      dataIndex: 'detail',
      key: 'detail',
      render: (_, records) => {
        return (
          <>
            <a onClick={() => handleDetail(records)}>详情</a>
          </>
        )
      },
    },
    {
      title: '删除',
      dataIndex: 'delete',
      key: 'delete',
      render: (_, records) => {
        return (
          <>
            <a onClick={() => handleEdit(records)}>删除</a>
          </>
        )
      },
    },
  ]
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

  const handleOk = () => {
    console.log('handleOk', ref.current.getFieldsValue())
    setIsIoen(false)
  }
  const handleDetail = () => {
    //https://www.huya.com/lpl
  }

  const handleCancel = () => {
    console.log('handleCancel')
    setIsIoen(false)
  }

  return (
    <div style={{ width: '80%', padding: '0 0 0 20px' }}>
      <ThemeContext.Provider value={myCount}>
        <TabBar onhandle={onhandle} />
        <div className="text_num">
          已选择
          {/* {props.count.value}--{props.books.value} */}项{'--'}
          <span onClick={change}>
            清空已选删除
            {/* <span>context: {myCount}</span> */}
            {/* <button onClick={dart}>click me</button> */}
          </span>
        </div>
        <Table columns={columns} dataSource={tableData} />
        {isOpen && (
          <Modal
            title="编辑"
            open={isOpen}
            onOk={() => handleOk()}
            onCancel={handleCancel}
          >
            <MkInput ref={ref} data={inputData} />
          </Modal>
        )}
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
