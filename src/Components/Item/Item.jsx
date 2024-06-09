import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (   

    <Link to={`/product/${props.id}`}>
        <div className="item"  onClick={()=> window.scrollTo(0,'10px')}>
          <img src={props.image} alt="Item Image" />
          <p>{props.name}</p>
          <div className="item-prices">
              <div className="item-oprice">${props.old_price}</div>
              <div className="item-nprice">New Price : ${props.new_price}</div>
          </div>
      </div>
    </Link>

  )
}