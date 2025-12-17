import React, { useState, useEffect } from 'react';
import './men.css';
import { Link } from 'react-router-dom';

function Mens() {
 

  // States
  const [mensWear, setMensWear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend API
  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?category=mens');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setMensWear(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

 

  

  // Loading and error states
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className='loading-text'>Loading Men's Products...</p>
      </div>
    )
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Render UI
  return (
    <div className="New-Arrivals">
      <div className="title">MEN'S WEAR</div>
      <div className="content">
        Upgrade your wardrobe with our newest men’s fashion. Shop stylish and modern pieces today!
      </div>

      <Link to="/mens" className="link">VIEW ALL</Link>

      <div className="product-list">
        {mensWear.slice(0, 4).map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/mensWearProducts/${product._id}`} className="image-wrapper">
              <img
                className="main-img"
                src={product.mainImg}
                alt={product.name}
              />
              <img
                className="hover-img"
                src={product.hoverImg}
                alt={`${product.name} hover`}
              />
           
            </Link>

            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>

           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;
