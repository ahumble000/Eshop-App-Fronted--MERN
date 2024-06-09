import React from 'react';
import './Offer.css';

import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (

    <div className="offer">
        <div className="offer-left">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="btn">Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="Offer Image" />
        </div>
    </div>
    
  )
}
  export default Offer
