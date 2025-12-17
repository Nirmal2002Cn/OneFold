import './mens.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Mens() {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🧠 Fetch men's products from backend API
  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?category=mens');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

 
  // ⏳ Loading or error states
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className='loading-text'>Loading Men's Products...</p>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // 🧱 Render products
  return (
    <>
      <div className='p-title'>
        <h2>Men's Wear</h2>
      </div>

      <div className='mens-container'>
        {products.map((product) => (
          <div key={product._id} className='product-card'>
            <Link to={`/product/mens/${product._id}`} className='image-wrapper'>
              <img src={product.mainImg} alt={product.name} />
              <img src={product.hoverImg} alt={product.name + ' hover'} />

            </Link>

            <p className='product-name'>{product.name}</p>
            <p className='product-price'>{product.price}</p>

            
          </div>
        ))}
      </div>
    </>
  );
}

export default Mens;
