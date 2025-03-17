import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
export const LandingPage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center p-3">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success mb-4">
          Welcome to CropX
        </h1>
        <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: "800px" }}>
          Revolutionizing Agricultural Commerce through Direct Farm-to-Market Connections
        </p>

        <div className="d-flex gap-3 justify-content-center mb-5">
          <Link to="/signup" className="text-decoration-none">
            <button className="btn btn-success btn-lg px-5 py-3">
              Get Started
            </button>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <button className="btn btn-outline-success btn-lg px-5 py-3">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mx-auto" style={{ maxWidth: "800px" }}>
        <h2 className="fw-bold text-success mb-5">Why Choose CropX?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
              <h3 className="fw-bold mb-3">Direct from Farmers</h3>
              <p className="text-muted mb-0">
                Eliminate middlemen and get fresh produce
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
              <h3 className="fw-bold mb-3">Real-Time Tracking</h3>
              <p className="text-muted mb-0">
                Live order status updates
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
              <h3 className="fw-bold mb-3">Secure Payments</h3>
              <p className="text-muted mb-0">
                Encrypted transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};