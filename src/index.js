import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/main.css'


// import { Button } from 'element-react';
import 'element-theme-default';

// import reportWebVitals from './reportWebVitals';

import { axios } from './http/index'


const root = ReactDOM.createRoot(document.getElementById('root'));


// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );


root.render(
  <App />
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

