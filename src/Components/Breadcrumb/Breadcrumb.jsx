import React from 'react';
import './Breadcrumb.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumb = (props) => {
  const {product} = props;  

  return (
    <div className="bread-crumb">
        HOME <img src={arrow_icon} alt="Arrow Icon" /> SHOP <img src={arrow_icon} alt="Arrow Icon" /> {product.category} <img src={arrow_icon} alt="Arrow Icon" /> {product.name}
    </div>
  )

}

export default Breadcrumb
