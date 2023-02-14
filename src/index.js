import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/main.css'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

// import { Button } from 'element-react';
import 'element-theme-default';
import { Provider } from 'react-redux'

import store from './store';
import _ from 'lodash'
// console.log('store', store.getState())
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// lodash   http://lodash.think2011.net/pick

// const memoize = function (func, content) {
//   let cache = Object.create(null)
//   console.log(cache)
//   return (...key) => {
//     if (!cache[key]) {
//       cache[key] = func.apply(content, key)
//     }
//     return cache[key]
//   }
// }

// var cache = function (fn) {
//   var temp = {}
//   console.log(temp)
//   return  (...key) => {
//     if(!temp[key]) {
//       temp[key] = fn(key)
//     }
//     return temp[key]
//   }
// }
// var fn = (a, b) => {
//   console.log('aaaaa')
//   return a + b
// }

// var add = cache(fn)

// add(1,2,3)
// add(1,2,3)
// add(1,2)
// add(1,2)