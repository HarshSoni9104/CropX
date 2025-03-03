import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async(data) => {
        
            // const res = await axios.post("/login", data);
            const res = await axios.post("/user/login", data);
            console.log("Login Data:", data);
            // const res = await axios.post("http://localhost:3000/user/login", data);

            if(res.status === 200){
                localStorage.setItem("Id" , res.data.data._id)
                localStorage.setItem("role",res.data.data.roleId.name)
                console.log("API Response:", res.data);
                console.log("RoleId:", res.data.data.roleId);

                toast.success("Login Successful! 🎉")

                if(res.data.data.roleId?.name === "USER"){
                    navigate("/user");  
                }

            }else{
                toast.error("Invalid credentials! ❌")
            }   
    }

    const validationSchema = {
        emailValidator: {
            required: { value: true, message: 'Email is required' },
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Enter valid email'
            }
        },
        passwordValidator: {
            required: { value: true, message: 'Enter your password' },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
                message: 'Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character'
            }
        }
    }

    return (
        <div>
            <ToastContainer/>
        <div style={{
            backgroundColor: '#e6e6fa',
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: '20px'
        }}>
            <div className="shadow rounded overflow-hidden d-flex flex-column flex-md-row"
                style={{ width: '90%', maxWidth: '900px', backgroundColor: '#fff' }}>
                {/* Left Side - Login Form */}
                <div className="p-5 w-100 w-md-50">
                    <h3 className="mb-4 text-center text-md-start">Login</h3>
                    <form onSubmit={handleSubmit(submitHandler)} method="POST">
                        {console.log(errors)}
                        <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Email" {...register('email', validationSchema.emailValidator)} />
                            <p className="text-danger">{errors.email?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" {...register('password', validationSchema.passwordValidator)} />
                            <p className="text-danger">{errors.password?.message}</p>
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-3 text-end ">
                            <Link to="/forgot-password" className="text-primary" style={{ textDecoration: 'none' }}>Forgot Password?</Link>
                        </div>
                        <button className="btn btn-danger w-100">Login</button>
                    </form>
                </div>
                {/* Right Side - Welcome Message */}
                <div className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center text-white p-5"
                    style={{ background: 'linear-gradient(to right, #fc466b, #3f5efb)', minHeight: '300px' }}>
                    <h3 className="text-center">New Here?</h3>
                    <p className="text-center">Create an account to get started!</p>
                    <Link to="/signup">
                        <button className="btn btn-light">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}
