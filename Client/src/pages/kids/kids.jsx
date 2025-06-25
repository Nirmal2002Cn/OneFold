import './kids.css'
import React,{useState} from 'react';
import  {useCart} from '../../components/CartProvider';

function kids() {
  const {addToCart} = useCart();

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const products = [
   {
    id:1,
    name:'Giraf',
    price:'Rs 700.00',
    mainImg:'/kids products/1-2.jpg',
    hoverImg:'/kids products/1.jpg',
  },
  {
    id:2,
    name:'Lion',
    price:'Rs 700.00',
    mainImg:'/kids products/2-2.jpg',
    hoverImg:'/kids products/2.jpg',
  },
  {
    id:3,
    name:'Little Pine',
    price:'Rs 900.00',
    mainImg:'/kids products/3-2.jpg',
    hoverImg:'/kids products/3.jpg',
  },
  {
    id:4,
    name:'Cute Panda ',
    price:'Rs 15,200.00',  
    mainImg:'/kids products/4-2.jpg',
    hoverImg:'/kids products/4.jpg',
  }
  ,{
    id:5,
    name:'Jumbo Panda',
    price:'Rs 3,500.00',
    mainImg:'/kids products/5.jpg',
    hoverImg:'/kids products/5-2.jpg',
  },
  {
    id:6,
    name:'Baby Toys',
    price:'Rs 1,500.00',
    mainImg:'/kids products/6.jpg',
    hoverImg:'/kids products/6-2.jpg',
  },
  {
    id:7,
    name:'Sketing Bord',
    price:'Rs 3,500.00',
    mainImg:'/kids products/7.jpg',
    hoverImg:'/kids products/7-2.jpg',
  },
  {
    id:8,
    name:'Toy Car',
    price:'Rs 3,200.00',
    mainImg:'/kids products/8.jpg',
    hoverImg:'/kids products/8-2.jpg',
  },{
    id:9,
    name:'Baby Commode',
    price:'Rs 3,500.00',
    mainImg:'/kids products/9.jpg',
    hoverImg:'/kids products/9-2.jpg',
  }
  ];
  return (
<>
       <div className='p-title'>
      <h2>Kid's Wear</h2>
      </div>
    <div className='Kids-container'>
       {products.map((product) =>(
        <div key={product.id} className='product-card'>
          <div className='image-wrapper'>
            <img 
            src={product.mainImg}
             alt={product.name}
              />

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

export default kids