import React, { useState, useEffect } from 'react';
import './hWomens.css';
import { Link } from 'react-router-dom';

function HWomens() {
 

  // States
  const [womensWear, setWomensWear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend API
  useEffect(() => {
    const fetchWomensProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?category=H-womens');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setWomensWear(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWomensProducts();
  }, []);

 

 

  // Loading and error handling
  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Render UI
  return (
    <div className="New-Arrivals">
      <div className="title">WOMEN'S WEAR</div>
      <div className="content">
        Elevate your style with our latest women’s fashion. Shop chic and trendy pieces now!
      </div>
      <Link to="/womens" className="link">VIEW ALL</Link>

      <div className="product-list">
        {womensWear.slice(0, 4).map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/hWomensProduct/${product._id}`} className="image-wrapper">
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

export default HWomens;
