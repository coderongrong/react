// import './App.css';

import { Layout } from 'antd';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import Publish from './pages/Publish'
import Dashboard from './pages/Dashboard'
// import OtherFree from '@/infomation/OtherFree'
// import Role from '@/infomation/Role'

import LayoutSider from './Loyout/Sider';

import Demo from './infomation/Manage/children/Demo';
import Hellow from './infomation/Manage/children/hellow';

const OtherFree = lazy(() => import('@/infomation/OtherFree'))
const Role = lazy(() => import('@/infomation/Role'))
const Manage = lazy(() => import('@/infomation/Manage'))
const Muitil = lazy(() => import('@/system/MultiTenancy'))

// import { Button } from 'element-react';

const { Header } = Layout;

function App() {

  return (
    <Layout>
      <Header className='t-c'>
        <span>卓信通信</span>
        <span className='main-size mian_text'>欢迎进入 速规智慧城市通信基础设施规划 平台</span>
      </Header>
      <Layout>
        <BrowserRouter>
          <LayoutSider />
          <Suspense
            fallback={
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 200
                }}
              >
                loading...
              </div>
            }
          >
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="publish" element={<Publish />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="free" element={<OtherFree />} />
              <Route path="role" element={<Role />} />
              {/* <Route path="manage/:name" element={<Manage />}> */}
              <Route path="manage" element={<Manage />}>
                <Route index element={<Demo />} />
                <Route exact path="hellow" element={<Hellow />} />
                {/* <Redirect to="/demo"/> */}
              </Route>
              <Route path="muitil" element={<Muitil />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Layout>
    </Layout>
  );
}

export default App;

// import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
// import { history } from './utils'

// import './App.css'
// import { AuthComponent } from '@/components/AuthComponent'
// import { lazy, Suspense } from 'react'

// // 按需导入组件
// const Login = lazy(() => import('./pages/Login'))
// const Layout = lazy(() => import('./pages/Layout'))
// const Home = lazy(() => import('./pages/Home'))
// const Article = lazy(() => import('./pages/Article'))
// const Publish = lazy(() => import('./pages/Publish'))
// const Sence = lazy(() => import('./pages/Sence'))
// const About = lazy(() => import('./pages/About'))
// const Zpublic = lazy(() => import('./pages/Zpublic'))
// const Zarticle = lazy(() => import('./pages/Zarticle'))

// // Suspense懒加载时候用到

// function App () {
//   return (
//     // 路由配置
//     <HistoryRouter history={history}>
//       <div className="App">
//         <Suspense
//           fallback={
//             <div
//               style={{
//                 textAlign: 'center',
//                 marginTop: 200
//               }}
//             >
//               loading...
//             </div>
//           }
//         >
//           <Routes>
//             {/* 创建路由path和组件对应关系 */}
//             {/* Layout需要鉴权处理的 */}
//             {/* 这里的Layout不一定不能写死 要根据是否登录进行判断 */}
//             <Route path='/' element={
//               <AuthComponent>
//                 <Layout />
//               </AuthComponent>
//             }>
//               <Route index element={<Home />}></Route>
//               <Route path='article' element={<Article />}></Route>
//               <Route path='publish' element={<Publish />}></Route>
//               <Route path='sence' element={<Sence />}></Route>
//               <Route path='about' element={<About />}></Route>
//               <Route path='zpublish' element={<Zpublic />}></Route>
//               <Route path='zarticle' element={<Zarticle />}></Route>
//             </Route>
//             {/* 这个不需要 */}
//             <Route path='/login' element={<Login />}></Route>
//           </Routes>
//         </Suspense>
//       </div>
//     </HistoryRouter>
//   )
// }

// export default App



