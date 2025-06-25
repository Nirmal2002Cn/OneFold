import React from 'react'
import './living.css'
import  {useCart} from '../../components/CartProvider';

function living() {

   const {addToCart} = useCart();
  
    const handleAddToCart = (product) => {
      addToCart(product)
    }
   const products = [
  {
    id:1,
    name:'Baby Neck Pillow',
    price:'Rs 3,500.00',

    mainImg:'/home product/1.jpg',
    hoverImg:'/home product/1-2.jpg',
  },
  {
    id:2,
    name:'Bedding Set',
    price:'Rs 5,500.00',
 
    mainImg:'/home product/2.jpg',
    hoverImg:'/home product/2-2.jpg',
  },
  {
    id:3,
    name:'Mosquito Net',
    price:'Rs 3,500.00',

    mainImg:'/home product/3.jpg',
    hoverImg:'/home product/3-2.jpg',
  },
  {
    id:4,
    name:'Sleeping Mat',
    price:'Rs 5,200.00',
  
    mainImg:'/home product/4.jpg',
    hoverImg:'/home product/4-2.jpg',
  }
  ,{
    id:5,
    name:'Baby Bath Mat (Blue)',
    price:'Rs 3,500.00',
   
    mainImg:'/home product/5.jpg',
    hoverImg:'/home product/5-2.jpg',
  },
  {
    id:6,
    name:'	HOME Door Mat',
    price:'Rs 5,500.00',
   
    mainImg:'/home product/6.jpg',
    hoverImg:'/home product/6-2.jpg',
  },
  {
    id:7,
    name:'Water Bottle',
    price:'Rs 3,500.00',
 
    mainImg:'/home product/7.jpg',
    hoverImg:'/home product/7-2.jpg',
  },
  {
    id:8,
    name:'Printed Baby Door Mat',
    price:'Rs 5,200.00',
  
    mainImg:'/home product/8.jpg',
    hoverImg:'/home product/8-2.jpg',
  }]
  return (
    <>
    <div className='p-title'>
      <h2>Home & Lifestyle</h2>
      </div>
    <div className='living-container'>
       {products.map((product) =>(
        <div key={product.id} className='product-card'>
          <div className='image-wrapper'>
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

          </div>
          <p className='product-name'>{product.name}</p>
          <p className='product-price'>{product.price}</p>
         

        </div>
      ))}







    </div>
    </>
  )
}

export default living