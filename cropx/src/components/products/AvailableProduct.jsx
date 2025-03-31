import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProducts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/product/products");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Available Products</h2>
      {isLoading && <p>Loading...</p>}
      <table border="1" style={{ width: "80%", margin: "auto" }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.unit}</td>
              <td>₹{product.price_per_unit}</td>
              <td>
                <img
                  src={product.productUrl}
                  alt={product.name}
                  style={{ height: 100, width: 100 }}
                />
              </td>
              <td>
                <button onClick={() => addToCart(product)} className="btn btn-success">
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
