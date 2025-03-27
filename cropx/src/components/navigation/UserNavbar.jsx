import React from "react";
import { useNavigate } from "react-router-dom";

export const UserNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="btn btn-light rounded-circle p-2"
            style={{ transition: "transform 0.2s" }}
          >
            <i className="bi bi-list fs-5"></i>
          </button>
          <h5 className="mb-0 text-capitalize">{userRole} Dashboard</h5>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            onClick={handleLogout}
            className="btn btn-danger d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
            style={{ transition: "transform 0.2s" }}
          >
            <i className="bi bi-box-arrow-right"></i>
            <span className="d-none d-md-inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};