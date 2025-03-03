import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import "bootstrap/dist/css/bootstrap.min.css";

import { UserSidebar } from './components/layouts/UserSidebar'
// import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { Route, Routes } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
// import {Login} from './components/common/login/Login'

import {Signup} from './components/common/signup/Signup'
import { Login } from './components/common/Login/Login'
import ForgotPassword from './components/common/forgetPassword/ForgetPassword'

import { DemoSidebar } from './components/admin/DemoSidebar'
import { Demo } from './components/admin/Demo'
import axios from 'axios'

function App() {

  axios.defaults.baseURL = "http://localhost:3000"

  return (
        <div className='layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded sidebar-open"'>
          <div className='app-wrapper'>
          <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      
        {/* User Routes (nested inside UserSidebar) */}
        <Route path="/user" element={<UserSidebar />}>
          <Route path="profile" element={<UserProfile />} />
        </Route>

          <Route path='/DemoUser' element={<DemoSidebar />} >
            <Route path='profile' element={<Demo/>}></Route>
          </Route>

        
          
        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
          </div>
        </div>
     
  )
}

export default App
