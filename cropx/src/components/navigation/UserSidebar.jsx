import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure this is imported

export const UserSidebar = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const location = useLocation();

    const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  return (
    <aside className="d-flex flex-column bg-white shadow-sm border-end vh-100" style={{ width: "250px", backgroundColor: "red" }}>
      <div className="p-3">
        {/* Logo Section */}
        <h4 className="text-danger fw-bold mb-4">CropX</h4>

        <nav className="nav flex-column">
          {/* Add Product */}
          <Link
            to="/user/add-product"
            className={`nav-link py-2 d-flex align-items-center ${
              location.pathname === "/add-product" ? "text-primary fw-bold" : "text-muted"
            }`}
          >
            <i className="bi bi-plus-circle me-2"></i> Add Product
          </Link>
          {/* Dashboards */}
          <div className="mb-2">
            <button
              className="nav-link text-muted d-flex justify-content-between align-items-center bg-transparent border-0 w-100 py-2"
              onClick={() => {
                setDashboardOpen(!dashboardOpen);
                console.log("Dashboard toggled:", !dashboardOpen); // Debugging
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="d-flex align-items-center">
                <i className="bi bi-speedometer me-2"></i> Dashboards
              </span>
              <i className={`bi ${dashboardOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </button>

            {/* Collapsible Dashboard Links */}
            {dashboardOpen && (
              <div className="ps-3">
                <Link
                  to="/dashboard-v1"
                  className={`nav-link py-1 ${location.pathname === "/dashboard-v1" ? "text-primary fw-bold" : "text-muted"}`}
                >
                  Dashboard v1
                </Link>
                <Link
                  to="/dashboard-v2"
                  className={`nav-link py-1 ${location.pathname === "/dashboard-v2" ? "text-primary fw-bold" : "text-muted"}`}
                >
                  Dashboard v2
                </Link>
                <Link
                  to="/dashboard-v3"
                  className={`nav-link py-1 ${location.pathname === "/dashboard-v3" ? "text-primary fw-bold" : "text-muted"}`}
                >
                  Dashboard v3
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
};
