import React, { useContext } from 'react';
import './Popular.css';

import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

const Popular = () => {

  const {all_product} = useContext(ShopContext);
  const womenLatest = all_product.filter(e=>e.category==='women').slice(-4).reverse();

  return (

    <div className="popular">
        <h2>Popular In Women</h2>
        <div className="popular-items">
            {womenLatest.map((item,i)=>{
              if(item.category === 'women'){
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
              }
            })}
        </div>
    </div>
                
  )
}

export default Popular