import { Layout } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

import { getUserPermissionBy } from '../api/tree'
import { useEffect, useState } from 'react';
import { handleTree } from '../utils/index'
import { map } from 'lodash';

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
    getItem('信息维护', 'sub3', <AppstoreOutlined />, [
        getItem('其他费用', '5', <AppstoreOutlined />),
        getItem('产品库字段配置', '6', <AppstoreOutlined />),
        getItem('自动画线配置', 'sub4', <AppstoreOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('系统管理', 'sub5', <SettingOutlined />, [
        getItem('Option 9', '9'),
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
];

const { Sider } = Layout;
function getItem(
    label,
    key,
    icon,
    children,
    type,
) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const routerObj = {
    1: '/home',
    2: '/publish',
    3: '/dashboard',
    '01': '/free',
    '02': '/role',
    '03': '/manage',
}
export default function LayoutSider() {

    const selcetData = () => {
        return map(routerObj, (item, index) => {
            if (item == window.location.pathname) return index
        }).filter(item => item)
    }
    let _key = null
    const keyData = () => {
        items.map(item => {
            item.children.map(it => {
                if (it.key == selcetData().toString()) {
                    _key = item.key
                }
            })
        })
    }
    keyData()

    const [menu, setMenu] = useState(items)
    const [select, setSelect] = useState(...selcetData())
    const [key, setKey] = useState(_key)
    const _getUserPermissionBy = async () => {
        const { result } = await getUserPermissionBy()
        const resData = handleTree(result.menu)
        // setMenu(resData)
    }
    useEffect(() => {
        _getUserPermissionBy()
    }, [])

    const navigate = useNavigate()
    const onClick = (e) => {
        // navigate(routerObj[e.key] + '?name=tom&age=18')   // search参数
        navigate(routerObj[e.key], { state: 10000 })    // state参数
        // navigate(routerObj[e.key] + '/jack')    // 传递params参数
    };
    return <Sider>
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={select}
            defaultOpenKeys={[`${key}`]}
            mode="inline"
            items={menu}
        />
    </Sider>
}