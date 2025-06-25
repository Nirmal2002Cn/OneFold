import React from 'react';
import './NAwomens.css';
import {Link } from 'react-router-dom';
function Mens() {
  const products = [
    {
      id: 1,
      name: 'Petite Rachel Dress',
      price: 'Rs 4,500.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      mainImg: '/products/blue.png',
      hoverImg: '/products/blue 2.png',
    },
    {
      id: 2,
      name: 'Imogen Jumpsuit',
      price: 'Rs 5,500.00',
      sizes: ['S', 'M', 'L', 'XL'],
      mainImg: '/products/green.png',
      hoverImg: '/products/green back.png',
    },
    {
      id: 3,
      name: 'Petite Phia Dress',
      price: 'Rs 3,500.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      mainImg: '/products/light blue.png',
      hoverImg: '/products/Light blue back.png',
    },
    {
      id: 4,
      name: 'Gorge Beaded Dress',
      price: 'Rs 9,200.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      mainImg: '/products/very blue.png',
      hoverImg: '/products/very blue back.png',
    },
  ];

  return (
    <div className="New-Arrivals">
      <div className="title">NEW ARRIVALS</div>
      <div className="content">
        Explore the latest trends and must-haves. Shop now and stay stylish
        with our fresh collection
      </div>
          <Link to="/women" className="view-all">
             VIEW ALL
           </Link>
           

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img
                className="main-img"
                src={product.mainImg}
                alt={product.name}
              />
              <img
                className="hover-img"
                src={product.hoverImg}
                alt={product.name + ' hover'}
              />
              <button className='add-to-cart'>Add to Cart</button>
            </div>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <div className="size-options">
              {product.sizes.map((size, index) => (
                <span key={index}>{size}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mens;
