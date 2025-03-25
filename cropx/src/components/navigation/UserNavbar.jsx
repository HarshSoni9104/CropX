// UserNavbar.jsx
import React from "react";
import hamburgermenu from "../../assets/images/hamburgermenu.png";
import { useNavigate } from "react-router-dom";


export const UserNavbar = ({toggleSidebar}) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid justify-content-between">
      <button  onClick={toggleSidebar}>
        <img src={hamburgermenu} alt="Menu" style={{ height: "25px", width: "25px" }} />
      </button>

        <div className="d-flex align-items-center">
          <button 
            className="btn btn-danger rounded-pill px-4"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};