import React, { useState, useEffect } from 'react';
import './hWomens.css';
import { useCart } from '../../components/CartProvider';
import { Link } from 'react-router-dom';

function HWomens() {
  const { addToCart } = useCart();

  // States
  const [womensWear, setWomensWear] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
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

  // Handle size selection
  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product._id];
    if (!selectedSize) {
      alert('Please select a size before adding to cart');
      return;
    }
    addToCart({
      ...product,
      selectedSize
    });
  };

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
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.preventDefault(); // prevent navigation
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </Link>

            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>

            <div className="size-options">
              {product.sizes?.map((size, index) => (
                <span
                  key={index}
                  className={`size ${selectedSizes[product._id] === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(product._id, size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HWomens;
