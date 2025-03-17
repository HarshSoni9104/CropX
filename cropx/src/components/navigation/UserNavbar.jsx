// UserNavbar.jsx
import React from "react";
import hamburgermenu from "../../assets/images/hamburgermenu.png";


export const UserNavbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid justify-content-between">
      <button  onClick={toggleSidebar}>
        <img src={hamburgermenu} alt="Menu" style={{ height: "25px", width: "25px" }} />
      </button>
        {/* Brand & Sidebar Toggle */}
        
        {/* <div className="d-flex align-items-center">
          <button 
            className="navbar-toggler me-3" 
            type="button"
            data-bs-toggle="collapse" 
            data-bs-target="#sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div> */}

        {/* Logout Button - Right Aligned */}
        <div className="d-flex align-items-center">
          <button 
            className="btn btn-danger rounded-pill px-4"
            onClick={() => {/* Add logout logic */}}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};