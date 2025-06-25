import './mens.css'
import React,{useState} from 'react';
import {useCart} from '../../components/CartProvider';


function mens() {
  const {addToCart} = useCart();
  const [selectedSizes,setSelectedSizes] = useState({});

  const handleSizeSelect =(productId,size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId] : size
    }));
  };

  const handleAddToCart =(product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize){
      alert('Please Select A Size Before Adding To Cart');
      return;
    }
    addToCart({
      ...product,
      selectedSize
    });
  };

  
  const products = [
  {
    id:1,
    name:'Brown pants',
    price:'Rs 3,500.00',
    sizes:['28','30','32','34','36','38'],
    mainImg:'/men products/2.jpg',
    hoverImg:'/men products/2-2.jpg',
  },
  {
    id:2,
    name:'Ash pants',
    price:'Rs 5,500.00',
    sizes:['28','30','32','34'],
    mainImg:'/men products/4.jpg',
    hoverImg:'/men products/4-2.jpg',
  },
  {
    id:3,
    name:'Navy blue pants',
    price:'Rs 3,500.00',
    sizes:['28','30','32','34','36','38'],
    mainImg:'/men products/5.jpg',
    hoverImg:'/men products/5-2.jpg',
  },
  {
    id:4,
    name:'Black pants',
    price:'Rs 5,200.00',
    sizes:['28','30','32','34','36'],
    mainImg:'/men products/10.jpg',
    hoverImg:'/men products/10-2.jpg',
  }
  ,{
    id:5,
    name:'Green t shirt',
    price:'Rs 3,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/mens/1-1.jpg',
    hoverImg:'/mens/1.jpg',
  },
  {
    id:6,
    name:'Blue check shirt',
    price:'Rs 5,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/mens/2-1.jpg',
    hoverImg:'/mens/2.jpg',
  },
  {
    id:7,
    name:'Merron t shirt',
    price:'Rs 3,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/mens/4-1.jpg',
    hoverImg:'/mens/4.jpg',
  },
  {
    id:8,
    name:'Black shirt',
    price:'Rs 5,200.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/7.jpg',
    hoverImg:'/men products/7-2.jpg',
  },{
    id:9,
    name:'White shirt',
    price:'Rs 3,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/6-2.jpg',
    hoverImg:'/men products/6.jpg',
  },
  {
    id:10,
    name:'Ash shirt',
    price:'Rs 5,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/12.jpg',
    hoverImg:'/men products/12-1.jpg',
  },
  {
    id:11,
    name:'Blue denim',
    price:'Rs 3,500.00',
    sizes:['28','30','32','34','36','38'],
    mainImg:'/men products/11-2.jpg',
    hoverImg:'/men products/11.jpg',
  },
  {
    id:12,
    name:'Ash denim',
    price:'Rs 5,200.00',
    sizes:['28','30','32','34','36'],
    mainImg:'/men products/15.jpg',
    hoverImg:'/men products/15-1.jpg',
  },
  {
    id:13,
    name:'Blue t shirt',
    price:'Rs 3,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/14.jpg',
    hoverImg:'/men products/14-1.jpg',
  },
  {
    id:14,
    name:'Blue flower shirt',
    price:'Rs 5,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/16-1.jpg',
    hoverImg:'/men products/16.jpg',
  },
    {
    id:15,
    name:'White t shirt', 
    price:'Rs 3,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/3.jpg',
    hoverImg:'/men products/3-2.jpg',
    },
  {
    id:16,
    name:'Red check shirt',
    price:'Rs 5,500.00',
    sizes:['XS','S','M','L','XL','XXL'],
    mainImg:'/men products/13.jpg',
    hoverImg:'/men products/13-1.jpg',
  }
  
  ]



  return (
   
    <>
     <div className='p-title'>
      <h2>Men's Wear</h2>
      </div>
    <div className='mens-container'>
     
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
            className="add-to-cart"
            onClick={() =>handleAddToCart(product)}
            >
              Add to Cart
            </button>

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
export default mens