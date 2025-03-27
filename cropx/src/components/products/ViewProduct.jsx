import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CustomLoader } from '../products/CustomLoader'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ViewProduct = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  const getAllProducts = async () => {
    const userId = localStorage.getItem("id")
    if (!userId) {
      toast.error("Authentication required. Please login again.")
      return
    }
    
    setIsLoading(true)
    try {
      const res = await axios.get(`/product/getallproductsbyuserid/${userId}`)
      setProducts(res.data.data)
    } catch (error) {
      toast.error("Failed to load products")
      console.error("Error fetching products:", error)
    }
    setIsLoading(false)
  }

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product permanently?")) return
    
    setDeletingId(productId)
    try {
      await axios.delete(`/product/delete/${productId}`)
      setProducts(prev => prev.filter(p => p._id !== productId))
      toast.success("Product deleted successfully")
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete product")
      console.error("Delete error:", error)
    }
    setDeletingId(null)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="container py-5">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <h2 className="text-center mb-4">Your Products</h2>
      
      {isLoading ? (
        <div className="text-center">
          <CustomLoader />
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <div className="col" key={product._id}>
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-img-top position-relative" style={{ height: '200px' }}>
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={product.productUrl || '/placeholder-product.jpg'}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = '/placeholder-product.jpg'
                    }}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-truncate">{product.name}</h5>
                  
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge bg-primary rounded-pill text-uppercase">
                        {product.unit}
                      </span>
                      <h4 className="text-success mb-0">
                        ₹{product.price_per_unit.toLocaleString()}
                      </h4>
                    </div>

                    <div className="d-grid gap-2">
                      <Link
                        to={`/user/updateproduct/${product._id}`}
                        className="btn btn-outline-primary"
                      >
                        <i className="bi bi-pencil-square me-2"></i>
                        Update
                      </Link>
                      
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-outline-danger"
                        disabled={deletingId === product._id}
                      >
                        {deletingId === product._id ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Deleting...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-trash3 me-2"></i>
                            Delete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {products.length === 0 && !isLoading && (
            <div className="col-12 text-center py-5">
              <div className="alert alert-info mb-0">
                No products found. Start by adding your first product!
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}