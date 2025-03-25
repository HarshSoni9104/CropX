import React from 'react'
// import { UserSidebar } from '../navigation/UserSidebar';
// import { UserNavbar } from '../navigation/UserNavbar';
import { UserLayout } from './UserLayout';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
    return (
      <UserLayout>
      <Outlet /> {/* This will dynamically change the dashboard content */}
    </UserLayout>
      );
    };

