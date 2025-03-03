import React from "react";
import { Link } from "react-router-dom";

export const UserNavbar = () => {
  return (
    <nav
      className="app-header navbar navbar-expand"
      style={{
        backgroundColor: "#1E1E2F", // Dark Background
        color: "#E4E4E4", // Light text/icons
      }}
    >
      <div className="container-fluid">
        {/* Left Navbar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" role="button">
              <i className="bi bi-list" style={{ color: "#E4E4E4" }} />
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="#" className="nav-link text-light">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="#" className="nav-link text-light">
              Contact
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to='/DemoUser/profile' className="nav-link text-light">UserProfile</Link>
          </li>

        </ul>

        {/* Right Navbar */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" role="button">
              <i className="bi bi-search" style={{ color: "#E4E4E4" }} />
            </a>
          </li>

          {/* Messages Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#">
              <i className="bi bi-chat-text" style={{ color: "#E4E4E4" }} />
              <span className="badge text-bg-danger rounded-pill">3</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end"
              style={{ backgroundColor: "#2A2A3B" }} // Dark dropdown
            >
              <a href="#" className="dropdown-item text-light">
                <div className="d-flex">
                  <img
                    src="../../dist/assets/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 rounded-circle me-3"
                  />
                  <div>
                    <h6 className="dropdown-item-title">Brad Diesel</h6>
                    <p className="small text-muted">Call me whenever you can...</p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item text-light text-center">
                See All Messages
              </a>
            </div>
          </li>

          {/* Notifications Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#">
              <i className="bi bi-bell-fill" style={{ color: "#E4E4E4" }} />
              <span className="badge text-bg-warning rounded-pill">15</span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end"
              style={{ backgroundColor: "#2A2A3B" }}
            >
              <span className="dropdown-item dropdown-header text-light">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item text-light">
                <i className="bi bi-envelope me-2" />
                4 new messages
                <span className="float-end text-secondary fs-7">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item text-light text-center">
                See All Notifications
              </a>
            </div>
          </li>

          {/* Fullscreen Toggle */}
          <li className="nav-item">
            <a className="nav-link" href="#" role="button">
              <i className="bi bi-arrows-fullscreen" style={{ color: "#E4E4E4" }} />
            </a>
          </li>

          {/* User Profile Dropdown */}
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <img
                src="../../dist/assets/img/user2-160x160.jpg"
                className="user-image rounded-circle me-2"
                alt="User"
                style={{ width: "35px", height: "35px" }}
              />
              <span className="text-light d-none d-md-inline">Alexander</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end"
              style={{ backgroundColor: "#2A2A3B" }}
            >
              <li className="user-header text-bg-primary text-center">
                <img
                  src="../../dist/assets/img/user2-160x160.jpg"
                  className="rounded-circle shadow"
                  alt="User Image"
                />
                <p>Alexander Pierce - Web Developer</p>
                <small>Member since Nov. 2023</small>
              </li>

              <li className="dropdown-divider" />
              <li className="user-footer text-center">
                <a href="#" className="btn btn-sm btn-outline-light me-2">
                  Profile
                </a>
                <a href="#" className="btn btn-sm btn-outline-danger">
                  Sign out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
