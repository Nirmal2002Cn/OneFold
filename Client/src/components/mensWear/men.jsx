import React from 'react';
import './men.css';
import {Link} from 'react-router-dom';

function Mens() {
  const products = [
    {
      id: 1,
      name: 'MENS ARMY GREEN SHIRT',
      price: 'Rs 3,500.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      mainImg: '/mens/1-1.jpg',
      hoverImg: '/mens/1.jpg',
    },
    {
      id: 2,
      name: 'MENS CHECKED GREEN SHIRT',
      price: 'Rs 5,500.00',
      sizes: ['S', 'M', 'L', 'XL'],
      mainImg: '/mens/2-1.jpg',
      hoverImg: '/mens/2.jpg',
    },
    {
      id: 3,
      name: 'PRINTED PEACH SHIRT',
      price: 'Rs 3,500.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      mainImg: '/mens/3-1.jpg',
      hoverImg: '/mens/3.jpg',
    },
    {
      id: 4,
      name: 'WAFFLE RED LONG SLEEVES',
      price: 'Rs 5,200.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      mainImg: '/mens/4-1.jpg',
      hoverImg: '/mens/4.jpg',
    },
  ];

  return (
    <div className="New-Arrivals">
      <div className="title">MEN'S WEAR</div>
      <div className="content">
        Upgrade your wardrobe with our newst men’s fashion.Shop stylish and modern pieces today!
      </div>
      <Link to="/mens "className='link'>
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
               <button className="add-to-cart">Add to Cart</button>
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
