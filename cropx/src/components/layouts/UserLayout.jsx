// UserLayout.jsx
import React, { useState } from 'react';
import { UserNavbar } from '../navigation/UserNavbar';
import { UserSidebar } from '../navigation/UserSidebar';
import { Outlet } from 'react-router-dom';

export const UserLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100">
      {/* Sidebar */}
      <div className={isSidebarOpen ? "d-block" : "d-none"}>
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <UserNavbar toggleSidebar={toggleSidebar}/>
        <main className="p-4">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};