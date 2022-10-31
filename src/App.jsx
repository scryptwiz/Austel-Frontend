import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/tenants/Dashboard';
import Login from './pages/tenants/Login';
import Payment from './pages/tenants/Payment';
import Signup from './pages/tenants/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Signup/>}/>
          <Route path='/tenant/login' element={<Login />}></Route>
          <Route path='/tenant/dashboard' element={<Dashboard/>}></Route>
          <Route path='/tenant/payment' element={<Payment/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
