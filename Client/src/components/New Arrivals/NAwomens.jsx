import React, { useState, useEffect } from 'react';
import './NAwomens.css';
import { Link } from 'react-router-dom';


function NAwomens() {


  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch New Arrivals (Women's)
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?category=womens');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setNewArrivals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  // Handle loading and error
  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Render UI
  return (
    <div className="New-Arrivals">
      <div className="title">NEW ARRIVALS</div>
      <div className="content">
        Explore the latest trends and must-haves. Shop now and stay stylish with our fresh collection.
      </div>

      <Link to="/women" className="view-all">
        VIEW ALL
      </Link>

      <div className="product-list">
        
        {newArrivals.slice(0, 4).map((product) => (
          <div key={product._id} className="product-card">
            
            <Link to={`/product/newArrivals/${product._id}`} className="image-wrapper">
              <img className="main-img" src={product.mainImg} alt={product.name} />
              <img className="hover-img" src={product.hoverImg} alt={`${product.name} hover`} />
              
            </Link>

            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>

          
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default NAwomens;