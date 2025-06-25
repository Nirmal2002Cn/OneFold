import React from 'react'
import './party.css'
import  {useCart} from '../../components/CartProvider';


function party() {
   const {addToCart} = useCart();
  
    const handleAddToCart = (product) => {
      addToCart(product)
    }
  
  const products = [
  {
    id:1,
    name:'Sholder Mini Dress',
    price:'Rs 3,500.00',
    mainImg:'/party product/1.webp',
    hoverImg:'/party product/1-2.webp',
  },
  {
    id:2,
    name:'Bodycon Dress',
    price:'Rs 5,500.00',
    mainImg:'/party product/2.webp',
    hoverImg:'/party product/2-2.webp',
  },
  {
    id:3,
    name:'Tie Detail Dress',
    price:'Rs 3,500.00',
    mainImg:'/party product/3.webp',
    hoverImg:'/party product/3-2.webp',
  },
  {
    id:4,
    name:'Shoilder Midi Dress',
    price:'Rs 5,200.00',
    mainImg:'/party product/4.webp',
    hoverImg:'/party product/4-2.webp',
  }
  ,{
    id:5,
    name:'Slit Evening Dress',
    price:'Rs 3,500.00',
    mainImg:'/party product/5.webp',
    hoverImg:'/party product/5-2.webp',
  },
  {
    id:6,
    name:'Ruched Mini Dress',
    price:'Rs 3,500.00',
    mainImg:'/party product/6.webp',
    hoverImg:'/party product/6-2.webp',
  },
  {
    id:7,
    name:'Shoulder Mini Dress',
    price:'Rs 3,500.00',
    mainImg:'/party product/7.webp',
    hoverImg:'/party product/7-2.webp',
  },{
    id:8,
    name:'Neck Beletd Mini Dress',
    price:'Rs 3,500.00',
    mainImg:'/party product/8.webp',
    hoverImg:'/party product/8-2.webp',
  },
  ]

  return (
    <>
    <div className='p-title'>
      <h2>Party Wear</h2>
      </div>
    <div className='party-container'>
      {products.map((product) =>(
        <div key={product.id} className='product-card'>
          <div className='image-wrapper'>
            <img 
            src={product.mainImg}
             alt={product.name} />

             <img 
             src={product.hoverImg} 
             alt={product.name+"hover"} />
              <button className='add-to-cart'
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

export default party