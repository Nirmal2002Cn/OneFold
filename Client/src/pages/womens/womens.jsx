import './womens.css';
import React, { useState, useEffect } from 'react';
import { useCart } from '../../components/CartProvider';
import { Link } from 'react-router-dom';

function Womens() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
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

  // 🧩 Handle size selection
  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  // 🛒 Handle Add to Cart
  const handleAddToCart = (e, product) => {
    e.preventDefault(); // prevent link navigation when clicking Add to Cart
    const selectedSize = selectedSizes[product._id];
    if (!selectedSize) {
      alert('Please select a size before adding to cart');
      return;
    }
    addToCart({ ...product, selectedSize });
  };

  // ⏳ Loading & Error states
  if (loading) return <div className="loading">Loading products...</div>;
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

              <button
                className="add-to-cart"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </button>
            </Link>

            <p className="product-name">{product.name}</p>
            <p className="product-price">Rs. {product.price}</p>

            <div className="size-options">
              {product.sizes && product.sizes.map((size, index) => (
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
    </>
  );
}

export default Womens;
