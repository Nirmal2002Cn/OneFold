import './womens.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Womens() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🧠 Fetch women's products from backend
  useEffect(() => {
    const fetchWomensProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?category=womens');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWomensProducts();
  }, []);

 

  // ⏳ Loading & Error states
   if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className='loading-text'>Loading Women's Products...</p>
      </div>
    )
  }
  if (error) return <div className="error">Error: {error}</div>;

  // 🧱 Render product grid
  return (
    <>
      <div className="p-title">
        <h2>Women's Wear</h2>
      </div>

      <div className="womens-container">
        {products.map(product => (
          <div key={product._id} className="product-card">
          
            <Link to={`/product/women/${product._id}`} className="image-wrapper">
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

export default Womens;
