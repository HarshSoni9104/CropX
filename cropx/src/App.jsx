  import { useEffect, useState } from 'react'


  // import { UserSidebar } from './components/layouts/UserSidebar'
  import "./assets/adminlte.css"
  import "./assets/adminlte.min.css"
  import { Route, Routes, useLocation } from 'react-router-dom'
  // import { DemoSidebar } from './components/admin/DemoSidebar'
  // import { Demo } from './components/admin/Demo'
  import axios from 'axios'
  import { AddProduct } from './components/products/AddProduct'
  import {MainLayout} from "./components/layouts/MainLayout"
  import {LandingPage} from './components/landing/LandingPage'
  import {Login} from "./components/auth/Login"
  import {Signup} from "./components/auth/Signup"
import { UserLayout } from './components/layouts/UserLayout'
  

  function App() {

    axios.defaults.baseURL = "http://localhost:3000"
    const location = useLocation();


    // useEffect(() => {
    //   if (location.pathname === "/login" || location.pathname === "/signup") {
    //     document.body.className = ""; // Remove the unwanted class for login and signup
    //   } else {
    //     document.body.className ="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    //   }
    // }, [location.pathname]);
    useEffect(() => {
      if (location.pathname === "/login" || location.pathname === "/signup") {
        document.body.className = "bg-light";
      } else if (location.pathname === "/") {
        document.body.className = "";
      } else {
        document.body.className = "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
      }
    }, [location.pathname]);
  
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path='/user' element={<UserLayout/>}>
        <Route path='add-product' element={<AddProduct/>}></Route>
        </Route>

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    );
  
  }

  export default App
