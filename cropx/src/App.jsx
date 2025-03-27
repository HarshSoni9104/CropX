import { useEffect, useState } from 'react'


// import { UserSidebar } from './components/layouts/UserSidebar'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
// import { DemoSidebar } from './components/admin/DemoSidebar'
// import { Demo } from './components/admin/Demo'
import axios from 'axios'
import { AddProduct } from './components/products/AddProduct'
import { MainLayout } from "./components/layouts/MainLayout"
import { LandingPage } from './components/landing/LandingPage'
import { Login } from "./components/auth/Login"
import { Signup } from "./components/auth/Signup"
import { UserLayout } from './components/layouts/UserLayout'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
// import {admin}
import { AdminDashboard } from "./components/dashboards/AdminDashboard";
import { WholesalerDashboard } from "./components/dashboards/WholesalerDashboard";
import { RetailerDashboard } from "./components/dashboards/RetailerDashboard";
import { TransporterDashboard } from "./components/dashboards/TransporterDashboard";
import { BuyerDashboard } from "./components/dashboards/BuyerDashboard";
import { FarmerDashBoard } from './components/dashboards/FarmerDashboard'
import { DashboardLayout } from './components/layouts/DashboardLayout'
import { UpdateProduct } from './components/products/UpdateProduct'
import { ViewProduct } from './components/products/ViewProduct'

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
      {/* <Route path="/admin-dashboard" element={<ProtectedRoute component={AdminDashboard} role="Admin" />} /> */}
      {/* <Route path="/user" element={<ProtectedRoute component={UserLayout} role="Farmer" />}>
                <Route path="add-product" element={<AddProduct />} />
        </Route> */}
      <Route path="/user" element={<ProtectedRoute component={DashboardLayout} role="Farmer" />}>
        <Route index element={<FarmerDashBoard />} />  {/* ✅ Default route when visiting /user */}
        <Route path="add-product" element={<AddProduct/>} />
        <Route path="viewproduct" element={<ViewProduct/>}/>
        <Route path='updateproduct/:id' element={<UpdateProduct/>}></Route>
      </Route>

      <Route path="/admin-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Admin" />}>
        <Route index element={<AdminDashboard />} />
      </Route>

      <Route path="/wholesaler-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Wholesaler" />}>
        <Route index element={<WholesalerDashboard />} />
      </Route>

      <Route path="/retailer-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Retailer" />}>
        <Route index element={<RetailerDashboard />} />
      </Route>

      <Route path="/transporter-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Transporter" />}>
        <Route index element={<TransporterDashboard />} />
      </Route>

      <Route path="/buyer-dashboard" element={<ProtectedRoute component={DashboardLayout} role="Buyers" />}>
        <Route index element={<BuyerDashboard />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );

}

export default App
