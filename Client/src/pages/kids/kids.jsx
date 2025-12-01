import './kids.css';
import React, { useState, useEffect } from 'react';
import { useCart } from '../../components/CartProvider';
import { Link } from 'react-router-dom';

function Kids() {
  const { addToCart } = useCart();

  // 🧠 State variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 📦 Fetch products from backend
  useEffect(() => {
    const fetchKidsProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products?category=kids');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKidsProducts();
  }, []);

  // 🛒 Add product to cart
  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Prevents Link navigation when clicking the button
    addToCart(product);
  };

  // ⏳ Loading & error handling
 if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className='loading-text'>Loading Kid's Products...</p>
      </div>
    )
  }
  if (error) return <div className="error">Error: {error}</div>;

  // 🧱 Render the products
  return (
    <>
      <div className="p-title">
        <h2>Kid's Wear</h2>
      </div>

      <div className="kids-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/kids/${product._id}`} className="image-wrapper">
              <img src={product.mainImg} alt={product.name} />
              <img src={product.hoverImg} alt={`${product.name} hover`} />

              <button
                className="add-to-cart"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </button>
            </Link>

            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Kids;
