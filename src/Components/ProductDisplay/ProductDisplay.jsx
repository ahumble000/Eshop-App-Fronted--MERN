import React, { useContext } from 'react';
import './ProductDisplay.css';
 
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product} = props;
  

  const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
       
       <div className="product-display-left">
       
          <div className="product-display-img-list">
            <img src={product.image} alt="Product Images list" />
            <img src={product.image} alt="Product Images list" />
            <img src={product.image} alt="Product Images list" />
            <img src={product.image} alt="Product Images list" />
          </div>
       
          <div className="product-display-main-img">
            <img src={product.image} alt="Product Images list" />
          </div>
       
       </div>
       
       <div className="product-display-right">
            
            <h1>{product.name}</h1>
            
            <div className="rating">
                <img src={star_icon} alt="Star Rating Icons" />
                <img src={star_icon} alt="Star Rating Icons" />
                <img src={star_icon} alt="Star Rating Icons" />
                <img src={star_icon} alt="Star Rating Icons" />
                <img src={star_dull_icon} alt="Star Rating Icons" />
                <p>(153)</p>
            </div>

            <div className="prices">
                <div className="old price">Old Price : ${product.old_price}</div>    
                <div className="new price">New Price : ${product.new_price}</div>    
            </div>            

            <div className="sizes">
                <h2>Select Size</h2>
                <div className="select-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                </div>
            </div>

            <button type='submit' onClick={()=> { addToCart(product.id) }} >Add to Cart</button> 

       </div>
    
    </div>
  )
}

export default ProductDisplay
