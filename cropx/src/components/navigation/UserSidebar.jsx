import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const UserSidebar = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const location = useLocation();
  const userRole = localStorage.getItem("role") || "User"; // Get the role from localStorage

  return (
    <aside className="d-flex flex-column bg-white shadow-sm border-end vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        {/* Logo Section */}
        <h4 className="text-danger fw-bold mb-4">CropX</h4>

        <nav className="nav flex-column">
          {/* Dashboard Section */}
          <div className="mb-2">
            <button
              className="nav-link text-muted d-flex justify-content-between align-items-center bg-transparent border-0 w-100 py-2"
              onClick={() => setDashboardOpen(!dashboardOpen)}
              style={{ cursor: "pointer" }}
            >
              <span className="d-flex align-items-center">
                <i className="bi bi-speedometer me-2"></i> Dashboards
              </span>
              <i className={`bi ${dashboardOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
            </button>

            {/* Collapsible Dashboard Links (Role-Based) */}
            {dashboardOpen && (
              <div className="ps-3">
                {userRole === "Admin" && (
                  <Link to="/admin-dashboard" className={`nav-link py-1 ${location.pathname === "/admin-dashboard" ? "text-primary fw-bold" : "text-muted"}`}>
                    Admin Dashboard
                  </Link>
                )}
                {userRole === "Farmer" && (
                  <>
                    <Link to="/user" className={`nav-link py-1 ${location.pathname === "/user" ? "text-primary fw-bold" : "text-muted"}`}>
                      Farmer Dashboard
                    </Link>
                    <Link to="/user/add-product" className={`nav-link py-1 ${location.pathname === "/user/add-product" ? "text-primary fw-bold" : "text-muted"}`}>
                      <i className="bi bi-plus-circle me-2"></i> Add Product
                    </Link>
                  </>
                )}
                {userRole === "Wholesaler" && (
                  <Link to="/wholesaler-dashboard" className={`nav-link py-1 ${location.pathname === "/wholesaler-dashboard" ? "text-primary fw-bold" : "text-muted"}`}>
                    Wholesaler Dashboard
                  </Link>
                )}
                {userRole === "Retailer" && (
                  <Link to="/retailer-dashboard" className={`nav-link py-1 ${location.pathname === "/retailer-dashboard" ? "text-primary fw-bold" : "text-muted"}`}>
                    Retailer Dashboard
                  </Link>
                )}
                {userRole === "Transporter" && (
                  <Link to="/transporter-dashboard" className={`nav-link py-1 ${location.pathname === "/transporter-dashboard" ? "text-primary fw-bold" : "text-muted"}`}>
                    Transporter Dashboard
                  </Link>
                )}
                {userRole === "Buyers" && (
                  <Link to="/buyer-dashboard" className={`nav-link py-1 ${location.pathname === "/buyer-dashboard" ? "text-primary fw-bold" : "text-muted"}`}>
                    Buyer Dashboard
                  </Link>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
};
