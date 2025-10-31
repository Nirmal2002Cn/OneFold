import React from 'react'
import './babies.css'
import  {useCart} from '../../components/CartProvider';
import {babyProducts} from '../../data/Products';
import { Link } from 'react-router-dom';



function babies() {
  const {addToCart} = useCart();
  
    const handleAddToCart = (product) => {
      addToCart(product)
    }
  
  return (
    <>
    <div className='p-title'>
      <h2>Mother & Baby Care</h2>
      </div>
    <div className='babies-container'>
      {babyProducts.map((product) =>(
        <div key={product.id} className='product-card'>
          <Link to={`/product/baby/${product.id}`} className="image-wrapper">
            <img 
            src={product.mainImg}
             alt={product.name} />

             <img 
             src={product.hoverImg} 
             alt={product.name+"hover"} />

              <button 
              className='add-to-cart'
              onClick={() =>handleAddToCart(product)}
              >Add to Cart</button>
          </Link>
             

        
          <p className='product-name'>{product.name}</p>
          <p className='product-price'>{product.price}</p>
         

        </div>
      ))}



    </div>
    </>
  )
}

export default babies