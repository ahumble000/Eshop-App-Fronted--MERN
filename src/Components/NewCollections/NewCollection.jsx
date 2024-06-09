import React, { useContext } from 'react';
import './NewCollection.css';

import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const NewColection = () => {

  const {all_product} = useContext(ShopContext);

  return (

    <div className="new-collection">
        <h2>Our New Collection</h2>
        <div className="collection">
            {all_product.slice(-8).reverse().map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>

  )
}               

export default NewColection
