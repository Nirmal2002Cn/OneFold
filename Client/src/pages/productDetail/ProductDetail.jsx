import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { id } = useParams(); // only get id from route
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch product data by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProduct(data);
        // create a fallback thumbnail list
        const thumbs = [data.mainImg, data.hoverImg].filter(Boolean);
        setMainImage(data.mainImg || thumbs[0] || null);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // ✅ Loading / Error handling
  if (loading) return <h2 className="loading">Loading product details...</h2>;
  if (error) return <h2 className="error">Error: {error}</h2>;
  if (!product) return <h2 className="not-found">Product Not Found</h2>;

  // ✅ Quantity controls
  const handleQuantityChange = (value) => {
    if (value < 1) return;
    setQuantity(value);
  };

  // ✅ Thumbnail click
  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  // ✅ Handle size select
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // ✅ Create simple thumbnail list
  const thumbnails = [product.mainImg, product.hoverImg].filter(Boolean);

  return (
    <div className="product-detail-container">
      {/* --- Image Section --- */}
      <div className="image-section">
        {mainImage && (
          <img src={mainImage} alt={product.name} className="main-image" />
        )}
        <div className="thumbnail-gallery">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => handleThumbnailClick(img)}
              className={`thumbnail ${mainImage === img ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* --- Details Section --- */}
      <div className="details-section">
        <h2>{product.name}</h2>
        <p className="price">Rs. {product.price}</p>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="size-selector">
            <p><strong>Size:</strong></p>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`size-button ${
                  selectedSize === size ? "selected" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Quantity */}
        <div className="quantity-selector">
          <p><strong>Quantity:</strong></p>
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>

        {/* Action buttons */}
        <div className="action-buttons">
          <button className="add-to-cart">ADD TO CART</button>
          <button className="buy-now">BUY IT NOW</button>
        </div>

        {/* Extra info */}
        <ul className="extra-info">
          <li>✔️ Cash On Delivery</li>
          <li>✔️ Exchange From Physical Outlets</li>
          <li>✔️ Delivery Within 2 - 3 Business Days</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
