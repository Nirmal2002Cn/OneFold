import React from 'react'
import './babies.css'
import  {useCart} from '../../components/CartProvider';



function babies() {
  const {addToCart} = useCart();
  
    const handleAddToCart = (product) => {
      addToCart(product)
    }
   const products = [
  {
    id:1,
    name:'Baby Carrier',
    price:'Rs 3,500.00',

    mainImg:'/baby product/1.jpg',
    hoverImg:'/baby product/1-2.jpg',
  },
  {
    id:2,
    name:'Baby Bib',
    price:'Rs 5,500.00',
 
    mainImg:'/baby product/2.jpg',
    hoverImg:'/baby product/2-2.jpg',
  },
  {
    id:3,
    name:'Pregnancy Support Pack',
    price:'Rs 3,500.00',

    mainImg:'/baby product/3.jpg',
    hoverImg:'/baby product/3-2.jpg',
  },
  {
    id:4,
    name:'Foldable Baby Stroller (Olive)',
    price:'Rs 5,200.00',
  
    mainImg:'/baby product/4.jpg',
    hoverImg:'/baby product/4-2.jpg',
  }
  ,{
    id:5,
    name:'Foldable Baby Stroller (Grey)',
    price:'Rs 3,500.00',
   
    mainImg:'/baby product/5.jpg',
    hoverImg:'/baby product/5.jpg',
  },
  {
    id:6,
    name:'Lightweight Baby Stroller (Green)',
    price:'Rs 5,500.00',
   
    mainImg:'/baby product/6.jpg',
    hoverImg:'/baby product/6.jpg',
  },
  {
    id:7,
    name:'Baby Playpen with Changing Table',
    price:'Rs 3,500.00',
 
    mainImg:'/baby product/7.jpg',
    hoverImg:'/baby product/7-2.jpg',
  },
  {
    id:8,
    name:'Luxury Baby Stroller with Canopy',
    price:'Rs 5,200.00',
  
    mainImg:'/baby product/8.jpg',
    hoverImg:'/baby product/8-2.jpg',
  },
 {
    id:9,
    name:'Baby Walker Car',
    price:'Rs 5,200.00',
  
    mainImg:'/baby product/9.jpg',
    hoverImg:'/baby product/9-2.jpg',
  }]
  return (
    <>
    <div className='p-title'>
      <h2>Mother & Baby Care</h2>
      </div>
    <div className='babies-container'>
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

export default babies