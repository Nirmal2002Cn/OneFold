import React, { useState, useEffect } from 'react';
import './babies.css';
import { useCart } from '../../components/CartProvider';
import { Link } from 'react-router-dom';

function Babies() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchBabyProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products?category=baby');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBabyProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) return <div className="loading">Loading Products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <div className="p-title">
        <h2>Mother & Baby Care</h2>
      </div>

      <div className="babies-container">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/baby/${product._id}`} className="image-wrapper">
              <img src={product.mainImg} alt={product.name} />
              <img src={product.hoverImg} alt={`${product.name} hover`} />

              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
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

export default Babies;
