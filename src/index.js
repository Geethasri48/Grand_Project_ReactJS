import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/nav.js';
import Login from './login.js';
import Header from './components/header.js';
import reportWebVitals from './reportWebVitals';
import Bundles from './components/Bundles.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin_Dash from './components/Admin_Dash';
import Admin_Login from './components/Admin_Login.js';
import Admin_Mac_Info from './components/Admin_Mac_Info.js'
import Admin_Bundles from './components/Admin_Bundles.js';
import Admin_Mac_Usage from './components/Admin_Mac_Usage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <Bundles/> */}
    {/* <Nav/> */}
    {/* <App/> */}
    <Login/>
    {/* <Admin_Dash/> */}
    {/* <Admin_Login/> */}
   {/* <Admin_Mac_Info/> */}
   {/* <Admin_Bundles/> */}
   {/* <Admin_Mac_Usage/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
