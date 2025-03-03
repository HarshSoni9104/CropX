import React, { useState } from 'react';
import { replace, useNavigate } from 'react-router-dom';
// import './Demo.css'; // Import CSS file

export const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Farmer",
    phoneNumber: "",
    address: "",
    isActive: true,
  });

  const handleChange = (e) => {
   
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ Prevent default form submission
    console.log("Form Data Submitted:", formData);
    // Instead of navigating with query parameters, you can use API calls or state management
    setFormData({
      name:"",
      email:"",
      password:"",
      role:"Consumer",
      phoneNumber:"",
      address: "",
      isActive: true
    })
  };

  navigate('/DemoUser/profile' , {replace:true})

  return (
    <div className="form-container">
      <div className="card card-primary card-outline mb-4">
        <div className="card-header">
          <div className="card-title">User Profile</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" name="address" rows="2" value={formData.address} onChange={handleChange}></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange}>
                <option value="Farmer">Farmer</option>
                <option value="Wholesaler">Wholesaler</option>
                <option value="Retailer">Retailer</option>
                <option value="Transporter">Transporter</option>
                <option value="Consumer">Consumer</option>
              </select>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="isActive" name="isActive" checked={formData.isActive} onChange={handleChange} />
              <label className="form-check-label" htmlFor="isActive">Active Account</label>
            </div>
          </div>

          <div className="card-footer ">
            <button type="submit" className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
