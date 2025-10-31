import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import{
    kidsProducts,
    mensProducts,
    womenProducts,
    babyProducts,
    homeProducts,
    partyProducts,
    mensWear,
    NAwomens,
    Hwomens,
} from '../../data/Products';
import './ProductDetails.css';

const categoryMap ={
    kids:kidsProducts,
    mens: mensProducts,
    women: womenProducts,
    baby: babyProducts,
    home: homeProducts,
    party: partyProducts,
    mensWearProducts: mensWear,
    newArrivals:NAwomens,
    hWomensProduct:Hwomens,
}

const ProductDetail =() => {
    const {category,id} =useParams();
    const [product,setProduct] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const [selectedSize,setSelectedSize] = useState(null);
    const [mainImage,setMainImage] = useState(null);
   
    
    useEffect(()=> {
        const selectedProducts =categoryMap[category];
        if (selectedProducts){
            const foundProduct = selectedProducts.find((p) => p.id.toString() === id);
            setProduct(foundProduct);
            setMainImage(foundProduct?.mainImg || foundProduct?.images?.[0] || null);
        }else{
            setProduct(null);
             // If category not found, set product to null
        }
    },[category,id]);

    if (!product) return <h2 className="not-found">Product Not Found</h2>;

    const handleQuantityChange = (value) => {
        if (value < 1) return; // Prevent quantity from going below 1
        setQuantity(value);
    };

    return(
        <div className="product-detail-container">
            <div className="image-section">
                {mainImage && (
                <img src={mainImage} alt={product.name} className="main-image" />
                )}
                <div className="thubnail-gallery">
                    {product.images?.map((img,index) => (
                        <img
                            key={index}
                            src={img}
                            alt='thumbnail'
                            className={`thumbnail ${mainImage === img ? 'active' : ""}`}
                            />
                    ))}
                </div>
            </div>

            <div className="details-section">
                <h2>{product.name}</h2>
                <p className="price">Rs. {product.price}</p>
                <p className="stock-warning">Please hurry! Only {product.stock} left in stock</p>
                <div className="size-selector">
                    <p><strong>Size:</strong></p>
                    {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                            >
                            {size}
                            </button>
                    ))}
                </div>

                <div className="quantity-selector">
                    <p><strong>Quantity:</strong></p>
                    <button onClick={()=> handleQuantityChange(quantity -1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={()=> handleQuantityChange(quantity + 1)}>+</button>

                </div>

                <div className="action-buttons">
                    <button className="add-to-cart">ADD TO CART</button>
                    <button className="buy-now">BUY IT NOW</button>

                </div>

                 <ul className="extra-info">
                        <li>✔️ Cash On Delivery</li>
                        <li>✔️ Exchange From Physical Outlets</li>
                        <li>✔️ Delivery Within 2 - 3 Business Days</li>
                  </ul>



            </div>
            
           

        </div>
    );
};

export default ProductDetail;
