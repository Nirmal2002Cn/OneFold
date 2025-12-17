import React, { useState, useEffect } from 'react';
import './party.css';
import { Link } from 'react-router-dom';

function Party() {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartyProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products?category=party');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartyProducts();
  }, []);

 

   if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className='loading-text'>Loading Party Products...</p>
      </div>
    )
  }
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <div className="p-title">
        <h2>Party Wear</h2>
      </div>

      <div className="party-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/party/${product._id}`} className="image-wrapper">
              <img src={product.mainImg} alt={product.name} />
              <img src={product.hoverImg} alt={`${product.name} hover`} />

              
            </Link>

            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Party;
