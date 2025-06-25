import React from 'react';
import './hWomens.css';

function hWomens() {
  const products = [
    {
      id: 1,
      name: 'Petite Rachel Dress',
      price: 'Rs 4,500.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      mainImg: '/womens/1.png',
      hoverImg: '/womens/1-1.png',
    },
    {
      id: 2,
      name: 'Imogen Jumpsuit',
      price: 'Rs 5,500.00',
      sizes: ['S', 'M', 'L', 'XL'],
      mainImg: '/womens/2.png',
      hoverImg: '/womens/2-1.png',
    },
    {
      id: 3,
      name: 'Petite Phia Dress',
      price: 'Rs 3,500.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      mainImg: '/womens/3.png',
      hoverImg: '/womens/3-1.png',
    },
    {
      id: 4,
      name: 'Gorge Beaded Dress',
      price: 'Rs 9,200.00',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      mainImg: '/womens/4.png',
      hoverImg: '/womens/4-1.png',
    },
  ];

  return (
    <div className="New-Arrivals">
      <div className="title">WOMEN'S WEAR</div>
      <div className="content">
        Elevate your style with our latest women’s fashion,shop chic and trendy pieces now! 
      </div>
      <a className="link" href="#">
        VIEW ALL
      </a>

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

export default hWomens;