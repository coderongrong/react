import { Layout } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

import { getUserPermissionBy } from '../api/tree'
import { useEffect, useState } from 'react';
import { handleTree } from '../utils/index'

const items = [
    getItem('产品库', 'sub1', <MailOutlined />, [
        getItem('灯杆产品库', '1', <MailOutlined />),
        getItem('综合箱产品库', '2', <MailOutlined />),
        getItem('智慧公厕产品库', '3', <MailOutlined />),
    ]),
    getItem('子用户管理', 'sub2', <MailOutlined />, [
        getItem('灯杆产品库', '01', <MailOutlined />),
        getItem('综合箱产品库', '02', <MailOutlined />),
        getItem('智慧公厕产品库', '03', <MailOutlined />),
    ]),
    getItem('信息维护', 'sub3', <AppstoreOutlined />, [
        getItem('菜单管理', '5', <AppstoreOutlined />),
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
    1: '/',
    2: '/publish',
    3: '/dashboard',
    '01': '/free'
}
export default function LayoutSider() {
    const [menu, setMenu] = useState(items)
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
        console.log(e)
        navigate(routerObj[e.key])
    };

    return <Sider>
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={menu}
        />
    </Sider>
}