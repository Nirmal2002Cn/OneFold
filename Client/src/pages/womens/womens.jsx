
import './womens.css';
import React,{useState} from 'react';
import {useCart} from'../../components/CartProvider';

function womens() {
  const {addToCart}= useCart();
  const[selectedSizes,setSelectedSizes] = useState({});

   const handleSizeSelect =(productId,size) =>{
    setSelectedSizes(prev =>({
      ...prev,
      [productId] : size
    }));
   };
   const handleAddToCart = (product) =>{
    const selectedSize = selectedSizes[product.id];
    if(!selectedSize){
      alert("PLease Select A Size Before Add To Cart");
      return;
    }
    addToCart({
      ...product,
      selectedSize
    }

    );
   };

   
  const products = [
  {
    id:1,
    name:'Charcoal Casual Trousers',
    price:'Rs 3,500.00',
    sizes:['28','30','32','34','36','38'],
    mainImg:'/women product/1.jpg',
    hoverImg:'/women product/1-2.jpg',
  },
  {
    id:2,
    name:'Washed Ash Slim Jeans',
    price:'Rs 5,500.00',
    sizes:['28','30','32','34'],
    mainImg:'/women product/2.jpg',
    hoverImg:'/women product/2-2.jpg',
  },
  {
    id:3,
    name:'Dark Indigo Denim',
    price:'Rs 3,500.00',
    sizes:['28','30','32','34','36','38'],
    mainImg:'/women product/3.jpg',
    hoverImg:'/women product/3-2.jpg',
  },
  {
    id:4,
    name:'Blush Pink Joggers',
    price:'Rs 5,200.00',
    sizes:['28','30','32','34','36'],
    mainImg:'/women product/4.jpg',
    hoverImg:'/women product/4-2.jpg',
  }
  ,{
    id:5,
    name:'Floral Midi Dress ',
    price:'Rs 3,500.00',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/5.jpg',
    hoverImg:'/women product/5-2.jpg',
  },
  {
    id:6,
    name:'Sage Striped Maxi Dress',
    price:'Rs 5,500.00',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/6.jpg',
    hoverImg:'/women product/6-2.jpg',
  },
  {
    id:7,
    name:'Mint Striped Flare Dress',
    price:'Rs 3,500.00',
     sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/7.jpg',
    hoverImg:'/women product/7-2.jpg',
  },
  {
    id:8,
    name:'Soft Green Floral Dress',
    price:'Rs 5,200.00',
     sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/8.jpg',
    hoverImg:'/women product/8-2.jpg',
  },{
    id:9,
    name:'Peach Striped Cotton Shirt',
    price:'Rs 3,500.00',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/9.jpg',
    hoverImg:'/women product/9-2.jpg',
  },
  {
    id:10,
    name:'Slate Check Shirt',
    price:'Rs 5,500.00',
     sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/10.jpg',
    hoverImg:'/women product/10-2.jpg',
  },
  {
    id:11,
    name:'Pastel Green Wrap Dress',
    price:'Rs 3,500.00',
     sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/11.jpg',
    hoverImg:'/women product/11-2.jpg',
  },
  {
    id:12,
    name:'vory Print Button-Up',
    price:'Rs 5,200.00',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    mainImg:'/women product/12.jpg',
    hoverImg:'/women product/12-2.jpg',
  }
]
  return (
    <>
    <div className='p-title'>
      <h2>Women's Wear</h2>
      </div>
    <div className='womens-container'>
       {products.map((product) =>(
        <div key={product.id} className='product-card'>
          <div className='image-wrapper'>
            <img 
            src={product.mainImg}
             alt={product.name}
              />
            <img src={product.hoverImg} alt="hover"
             />
               <button 
               className="add-to-cart"
               onClick={() =>handleAddToCart(product)}
               >Add to Cart</button>

          
          

          </div>
         
          <p className='product-name'>{product.name}</p>
          <p className='product-price'>{product.price}</p>
          <div className='size-options'>
            {product.sizes.map((size,index)=> (
                <span 
                key={index}
                className={`size ${selectedSizes[product.id] === size ? 'selected' : ''}`}
                onClick ={() => handleSizeSelect(product.id,size)}
                 >
               
                
                  {size}</span>
            ))}

          </div>

        </div>
      ))}




    </div>
    </>
  )
}

export default womens