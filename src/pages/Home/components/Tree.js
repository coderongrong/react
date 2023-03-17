import React, { useCallback, useMemo } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Tree, Dropdown, Menu } from 'antd'
import { useEffect, useState } from 'react'
import { handleData } from '../../../utils/index'
import { getUseInfo, getTreeData } from '../../../api/tree.js'
import { useLocation } from 'react-router-dom'
import ModalCom from '../children/Modal'

function TreeData(props) {
    // console.log('props  parents')
    const { callBack } = props
    const [treeData, setTreeData] = useState([])
    const [ obj, setObj ] = useState({})
    const login = async () => {
        const params = {
            username: 'rqw',
            password: 'rqw123456',
            captcha: '1',
            remember_me: true,
            loginType: '3',
        }
        const { result } = await getUseInfo(params)
        if (result.token) {
            // localStorage.setItem('usreToken', result.token)
            localStorage.setItem(
                'usreToken',
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Nzg3MzkzODgsInVzZXJuYW1lIjoicnF3In0.mAojkdfQUwM9M-QMPsChWAkL9CfAzjdf6utp9Kmduuw'
            )
        }
    }
    if (!localStorage.getItem('usreToken')) {
        login()
    }
    const state = useLocation()

    const _getTreeData = async () => {
        const params = {
            parentId: 0,
            type: 1,
            classType: state.pathname?.split('/')[1] || 'Lamppost',
        }
        const { result } = await getTreeData(params)
        setTreeData(handleData(result))
    }

    useEffect(() => {
        _getTreeData()
    }, [])

    const onSelect = async (selectedKeys, info) => {
        callBack(selectedKeys, info)
    }
    

    const handleRightMouce = ({ node }) => {
        // console.log('xxxxxxxxxx handleRightMouce', node)
        setObj(() => node)
    }

    const [isOpen, setOpen] = useState(false)

    const show = () => {
        // console.log('--------> obj', obj)
        setOpen(true)
    }

    const hidden = (data) => {
        setOpen(data)
    }

    const items = [
        {
            key: 'add',
            label: <span>编辑</span>,
            onClick() {
                show()
            },
        },
        {
            key: 'delete',
            label: <span>删除</span>,
            onClick() {},
        },
        {
            key: 'update',
            label: <span>新增</span>,
        },
    ]
    const titleRender = useCallback((nodeData) => {
        return (
            <Dropdown menu={{ items }} trigger={['contextMenu']}>
                <div>
                    <div>{nodeData.title}</div>
                </div>
            </Dropdown>
        )
    }, [])
    return (
        <>
            <Tree
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={treeData}
                titleRender={titleRender}
                onRightClick={handleRightMouce}
            />
            { isOpen && <ModalCom isOpen={isOpen} hidden={hidden} data={obj} />}
        </>
    )
}

export default TreeData
