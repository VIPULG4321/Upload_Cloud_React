import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css'
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Forgetpwd from './components/auth/ForgetPwd'
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home'
import Parent from './components/dashboard/test1';

import CloudDashboard from "./components/dashboard/claudetest";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgetpwd" element={<Forgetpwd />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        <Route path="/parent" element={<Parent />}></Route>
        <Route path="/claude" element={<CloudDashboard />}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
