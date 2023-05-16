import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Bundles from './components/Bundles.js';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reapair from'./components/Reapair';
import User from'./components/User';
import Machine from "./components/Machine";

import Admin_Dash from './components/Admin_Dash.js'
import Admin_Bundles from './components/Admin_Bundles';
import Admin_Login from './components/Admin_Login';
import Admin_Mac_Info from './components/Admin_Mac_Info';
import Admin_Mac_Usage from './components/Admin_Mac_Usage';
import Admin_Mac_Reports from './components/Admin_Mac_Reports';
import Admin_Repairs from './components/Admin_Repairs';



function App() {
  return (
    <div>
        {/* <h2>My React App</h2> */}
        <BrowserRouter>
        <Header />
        <div className='row' style={{background:"#F0FFFF"}}>
        <div className='col-md-2' ><Nav/></div>
        <div className='col-md-10' style={{height:"82.5vh",overflowY:"scroll",background:"#F0FFFF"}}>
        <Routes>
          
          <Route path='/Bundles' element={<Bundles />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/Reapair' element={<Reapair />} />
          <Route path='/Machine' element={<Machine />} />

          <Route path='/User' element={<User />} />
          
        </Routes>

        </div>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
