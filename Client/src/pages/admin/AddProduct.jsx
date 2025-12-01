// src/pages/admin/AddProduct.jsx
import React, { useState } from 'react';
import './AddProduct.css'; // <-- add this

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: 'womens',
    mainImg: '',
    hoverImg: '',
    sizes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { sizes, ...otherData } = formData;
    const sizesArray = sizes.split(',').map(s => s.trim()).filter(s => s);

    const productData = {
      ...otherData,
      price: Number(formData.price),
      sizes: sizesArray,
    };

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert('Product added successfully!');
        setFormData({
          name: '', price: 0, category: 'womens',
          mainImg: '', hoverImg: '', sizes: '',
        });
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="addproduct-container">
      <h2 className="addproduct-title">Add a New Product</h2>

      <form onSubmit={handleSubmit} className="addproduct-form">
        
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Main Image URL</label>
          <input type="text" name="mainImg" value={formData.mainImg} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Hover Image URL</label>
          <input type="text" name="hoverImg" value={formData.hoverImg} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Sizes (comma-separated)</label>
          <input type="text" name="sizes" value={formData.sizes} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="womens">Womens</option>
            <option value="mens">Mens</option>
            <option value="kids">Kids</option>
            <option value="home & living">Home & Living</option>
            <option value="mother & baby">Mother & Baby</option>
            <option value="party">Party</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Add Product</button>

      </form>
    </div>
  );
}

export default AddProduct;
