import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';

import './CartItems.css';

const CartItems = () => {

    const {all_product,cartItems,addToCart,removeFromCart,decrementFromCart,cartTotal,shipCost,cartSubTotal} = useContext(ShopContext);

    return (

        <div className="cart-item">
                            
            <div className="item-cart-headings">
                <h4>Item Image</h4>
                <h4>Item Name</h4>
                <p>Item Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Remove Item</p>
            </div>

        {   
            all_product.map((item)=>{

                
                if(cartItems[item.id] > 0){
                    return (  
                        <div className='cart-item-list'>
                                <img src={item.image} alt="Item Image" />
                                <h4>{item.name}</h4>
                                <p>${item.new_price}</p>
                                <p> <span onClick={()=> decrementFromCart(item.id)}>-</span> {cartItems[item.id]} <span onClick={()=> addToCart(item.id)}>+</span></p>
                                <p>${item.new_price * cartItems[item.id]}</p>
                                <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                        </div>
                    )  
            }
        
            else return null;

        })}

            <div className="sub-total">Total Bill : ${cartTotal()}</div>
            <div className="sub-total">Shipping Cost : ${shipCost()}. Free delivery if order is greater than $500</div>
            <div className="sub-total">Sub Total : ${cartSubTotal()}</div>

        </div>
    )
}

export default CartItems
