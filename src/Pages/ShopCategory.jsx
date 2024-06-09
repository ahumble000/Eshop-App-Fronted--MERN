import React,{useContext} from 'react';
import './Css/ShopCategory.css';
import {ShopContext} from '../Context/ShopContext';
import Item from '../Components/Item/Item';
 
const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);  
      
  return (  
    <div className="shop-category">
        <img src={props.banner} alt="Shop Category Banner" />  
        <h2>Clothes for {props.category}</h2>
        <div className="shop-category-products">
          {  
            all_product.slice().reverse().map((item,i)=>{
              if(props.category === item.category){
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>;
              }
              else{  
                return null;
              }
            })
          }
        </div>
    </div>
  )

}

export default ShopCategory