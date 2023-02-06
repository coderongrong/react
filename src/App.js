// import './App.css';

import { Layout } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Publish from './pages/Publish'
import Dashboard from './pages/Dashboard'
import { Divider } from 'rc-menu';

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Button } from 'element-react';

const { Header, Sider, Content } = Layout;

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
function App() {
  console.log('APP')

  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Router>
      <Layout>
        <Header className='t-c'>
          <span>卓信通信</span>
          <span className='main-size mian_text'>欢迎进入 速规智慧城市通信基础设施规划 平台</span>
        </Header>
        <Layout>
          <Sider>
            {/* <ul>
              <li>
                <Link to="/">产品库</Link>
              </li>
              <li>
                <Link to="/about">信息维护</Link>
              </li>
              <li>
                <Link to="/dashboard">系统管理</Link>
              </li>
            </ul> */}

            <Menu
              onClick={onClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <Publish />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;


