import React from 'react';
import './Hero.css';

import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';
import arrow from '../Assets/arrow.png';

export default function Hero() {
  return (
    <div className='hero'>

        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hand-text">
                    <p>new</p>
                    <img src={hand_icon} alt="Waving Icon" />
                </div>
                
                <p>collections</p>
                
                <p>for everyone</p>

                <button className="hero-btn">
                    <div>Latest collections</div>
                    <img src={arrow} alt="Arrow Icon" />
                </button>

            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="Banner Image" />
        </div>

    </div>
  )
}
