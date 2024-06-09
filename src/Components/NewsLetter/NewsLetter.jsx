import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (

    <div className="news-letter">
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newsletter and get exclusive offers on your email.</p>
        <div>
            <input type="email" placeholder='Enter your email'/>
            <button className='btn'>Subscribe</button>
        </div>
    </div>

  )
}

export default NewsLetter;