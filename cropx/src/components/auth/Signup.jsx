import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await axios.get("/roles")
                console.log("Roles API Response:", res.data); // Debugging

                setRoles(res.data.data)
            } catch (error) {
                toast.error("Failed to fetch roles")
            }
        }
        fetchRoles()
    }, [])

    const submitHandler = async (data) => {
        console.log(data)
        //const res = await axios.post("http://localhost:3000/user")

        //before sending data.. role bind
        try {
            // data.roleId = "67c68ccb957e608ef47a4203"
            const res = await axios.post("/user", data)

            if (res.status === 201) {
                toast.success("User created successfully! 🎉")
                navigate('/login')
            }

        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || "Something went wrong! ❌");
            } else {
                toast.error("Network error or server is down.");
            }
        }
    }

    const validationSchema = {
        nameValidator: { required: { value: true, message: 'Name is required' } },
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
        },
        confirmPassword: {
            required: { value: true, message: 'Confirm your password' },
            validate: (value) =>
                value === watch("password") || "Passwords do not match!",
        },
        contactValidator: {
            required: { value: true, message: "Enter your contact number" },
            pattern: { value: /^[6-9]{1}[0-9]{9}$/, message: "Enter valid contact number" }
        },
        cityValidator: {
            required: { value: true, message: 'City is required' }
        }
    }

    return (
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
            <ToastContainer />
            <div className="shadow rounded overflow-hidden d-flex flex-column flex-md-row"
                style={{ width: '90%', maxWidth: '900px', backgroundColor: '#fff', minHeight: "600px" }}>

                {/* Left Side - Sign Up Form */}
                <div className="p-5 w-100 w-md-50">
                    <h3 className="mb-4 text-center text-md-start">Sign Up</h3>
                    <form onSubmit={handleSubmit(submitHandler)} method="POST">
                        {/* {console.log(errors)} */}

                        <div className="mb-4">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" {...register('fullname', validationSchema.nameValidator)} />
                            <p className="text-danger">{errors.fullname?.message}</p>
                        </div>
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
                        <div className="mb-4">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" {...register('confirmPassword', validationSchema.confirmPassword)} />
                            <p className="text-danger">{errors.confirmPassword?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Contact</label>
                            <input type="number" className="form-control" placeholder="Contact" {...register('contact', validationSchema.contactValidator)} />
                            <p className="text-danger">{errors.contact?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" placeholder="Enter your city" {...register('city', validationSchema.cityValidator)} />
                            <p className="text-danger">{errors.city?.message}</p>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Select Role</label>
                            <select className="form-control" {...register('roleId', { required: "Role is required" })}>
                                <option value="">-- Select Role --</option>
                                {roles.map(role => (
                                    <option key={role._id} value={role._id}>{role.name}</option>
                                ))}
                            </select>
                            <p className="text-danger">{errors.roleId?.message}</p>
                        </div>

                        <button className="btn btn-danger w-100">Sign Up</button>
                    </form>
                </div>

                {/* Right Side - Welcome Message */}
                <div className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center text-white p-5"
                    style={{ background: 'linear-gradient(to right, #fc466b, #3f5efb)', minHeight: '300px' }}>
                    <h3 className="text-center">Welcome Back!</h3>
                    <p className="text-center">Already have an account?</p>
                    <Link to="/login">
                        <button className="btn btn-light">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
