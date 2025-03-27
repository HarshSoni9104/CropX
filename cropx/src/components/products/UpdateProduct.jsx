import axios from 'axios';
// import React from 'react'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

export const UpdateProduct = () => {

const id = useParams().id

const [categories, setCategories] = useState([]);
const [subcategories, setSubcategories] = useState([]);
const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        getCategories();
        getProductDetails();
    }, []); 

    const getCategories = async () => {
        try {
            const res = await axios.get("/category/categories");
            setCategories(res.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const getSubcategoryByCategoryId = async (id) => {
        try {
            const res = await axios.get(`/subcategory/getsubcategorybycategory/${id}`);
            setSubcategories(res.data.data);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const getProductDetails = async () => {
        try {
            const res = await axios.get(`/product/getProductById/${id}`);
            const product = res.data.data;
            // Set form values dynamically
            Object.keys(product).forEach((key) => setValue(key, product[key]));
            if (product.categoryId) {
                getSubcategoryByCategoryId(product.categoryId);
            }
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    const submitHandler = async(data) => {
        const userId = localStorage.getItem('id');
        if (!userId) {
            console.error("User ID not found in localStorage");
            return;
        }
        data.userId = userId;   
                delete data._id
        console.log(data);
        const res = await axios.put(`/product/updateproduct/${id}`, data);
        console.log(res.data.data);
        
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light overflow-x-hidden">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-md-8 col-lg-7 col-xl-6 w-75">
                    <div className="card p-4 shadow-lg rounded-3 bg-white text-dark vh-90 overflow-auto">
                        <h2 className="text-center mb-4 text-danger">Add Product</h2>
                        <form onSubmit={handleSubmit(submitHandler)} encType="multipart/form-data" className="overflow-y-auto" style={{ maxHeight: "80vh" }}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Product Name</label>
                                <input type="text" className="form-control" {...register("name")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Description</label>
                                <textarea className="form-control" {...register("description")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Price per Unit</label>
                                <input type="number" className="form-control" {...register("price_per_unit")} />
                            </div>
                            <div>
                                <label className="form-label fw-semibold">Unit</label>
                                <select {...register("unit")}>
                                    <option value="">Select Unit</option>
                                    <option value="kg">Kg</option>
                                    <option value="dozen">Dozen</option>
                                    <option value="liters">Liters</option>
                                    <option value="pieces">Pieces</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Quantity Available</label>
                                <input type="number" className="form-control" {...register("quantity_available")} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Category</label>
                                <select className="form-select" {...register("categoryId")} onChange={(event) => getSubcategoryByCategoryId(event.target.value)}>
                                    <option>Select Category</option>
                                    {categories?.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Subcategory</label>
                                <select className="form-select" {...register("subcategoryId")}>
                                    <option>Select Subcategory</option>
                                    {subcategories.length > 0 ? (
                                        subcategories.map((sub) => (
                                            <option key={sub._id} value={sub._id}>{sub.name}</option>
                                        ))
                                    ) : (
                                        <option disabled>No subcategories available</option>
                                    )}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Upload Product Image</label>
                                <input type="file" className="form-control" {...register("image")} />
                            </div>
                            <button type="submit" className="btn btn-danger w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
