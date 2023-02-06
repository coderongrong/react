// import './App.css';

import { Layout } from 'antd';

import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'


import Home from './pages/Home'
import Publish from './pages/Publish'
import Dashboard from './pages/Dashboard'

import LayoutSider from './Loyout/Sider';
import { Divider } from 'rc-menu';
import { useEffect } from 'react'




// import { Button } from 'element-react';

const { Header, Content } = Layout;

const ele = [
  {
    path: '/about',
    element: <Home />
  },
  {
    path: '/home',
    element: <Publish />
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]




function App() {
  useEffect(() => {
    console.log('Appp   --->  App')
  })
  return (
    <Layout>
      <Header className='t-c'>
        <span>卓信通信</span>
        <span className='main-size mian_text'>欢迎进入 速规智慧城市通信基础设施规划 平台</span>
      </Header>
      <Layout>
        <BrowserRouter>
          <LayoutSider />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="publish" element={<Publish />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Layout>
  );
}

export default App;


