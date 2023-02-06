import { Layout } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
const items = [
    getItem('产品库', 'sub1', <MailOutlined />, [
        getItem('灯杆产品库', '1', <MailOutlined />),
        getItem('综合箱产品库', '2', <MailOutlined />),
        getItem('智慧公厕产品库', '3', <MailOutlined />),
    ]),
    getItem('信息维护', 'sub2', <AppstoreOutlined />, [
        getItem('菜单管理', '5', <AppstoreOutlined />),
        getItem('产品库字段配置', '6', <AppstoreOutlined />),
        getItem('自动画线配置', 'sub3', <AppstoreOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const { Header, Sider, Content } = Layout;
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
    3: '/dashboard'
}
export default function LayoutSider() {
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate(routerObj[e.key])
    };
    return <Sider>
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    </Sider>
}