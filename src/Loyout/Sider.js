import { Layout, Menu } from 'antd'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { getUserPermissionBy } from '../api/tree'
import { useEffect, useState } from 'react'
import { map } from 'lodash'

const items = [
    getItem('产品库', 'sub1', <MailOutlined />, [
        getItem('灯杆产品库', '1', <MailOutlined />),
        getItem('综合箱产品库', '2', <MailOutlined />),
        getItem('智慧公厕产品库', '3', <MailOutlined />),
    ]),
    getItem('子用户管理', 'sub2', <MailOutlined />, [
        getItem('其他费用', '01', <MailOutlined />),
        getItem('角色管理', '02', <MailOutlined />),
        getItem('子用户管理', '03', <MailOutlined />),
    ]),
    getItem('系统管理', 'sub3', <AppstoreOutlined />, [
        getItem('多租用户', '5', <AppstoreOutlined />),
        getItem('客户端权限', '6', <AppstoreOutlined />),
        getItem('信息反馈', 'sub4', <AppstoreOutlined />),
    ]),
    getItem('系统管理', 'sub5', <SettingOutlined />, [
        getItem('Echarts图表', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('系统监控', 'sub6', <SettingOutlined />, [
        getItem('Option 9', '13'),
        getItem('Option 10', '14'),
        getItem('Option 11', '15'),
        getItem('Option 12', '16'),
    ]),
]

const { Sider } = Layout
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    }
}
const routerObj = {
    1: '/Lamppost',
    2: '/comprehensiveBox',
    3: '/publicToilet',
    '01': '/free',
    '02': '/role',
    '03': '/manage',
    5: '/muitil',
    6: '/client',
    sub4: '/freed',
    9: '/echart',
}
export default function LayoutSider() {
    const selcetData = () => {
        return map(routerObj, (item, index) => {
            if (item == window.location.pathname) return index
        }).filter((item) => item)
    }
    let _key = null
    const keyData = () => {
        items.map((item) => {
            item.children.map((it) => {
                if (it.key == selcetData().toString()) {
                    _key = item.key
                }
            })
        })
    }
    keyData()

    const [menu] = useState(items)
    const [select] = useState(...selcetData())
    const [key] = useState(_key)
    const _getUserPermissionBy = async () => {
        try {
            const res = await getUserPermissionBy()
            // const resData = handleTree(result.menu)
        } catch (e) {
            console.log(e)
        }
        // setMenu(resData)
    }
    useEffect(() => {
        _getUserPermissionBy()
    }, [])

    const navigate = useNavigate()
    const onClick = (e) => {
        // navigate(routerObj[e.key] + '?name=tom&age=18')   // search参数
        navigate(routerObj[e.key], { state: 999 }) // state参数
        // navigate(routerObj[e.key] + '/jack')    // 传递params参数
    }
    return (
        <Sider>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={select}
                defaultOpenKeys={[`${key}`]}
                mode="inline"
                items={menu}
            />
        </Sider>
    )
}
