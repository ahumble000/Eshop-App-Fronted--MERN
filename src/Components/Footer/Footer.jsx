import React from 'react';
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';


export default function Footer() {
  return (

    <div className="footer">
       <div className="footer-logo">  
          #CAHA <span>ESHOP</span>
       </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Terms and Policy</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        
       <div className="footer-social-icons">
          <div className="social-icon">
          <a href="https://www.instagram.com/bhtsakhtlaunda?utm_source=qr" aria-label="Instagram">
            <img src={instagram_icon} alt="Instagram Icon" />
          </a>
          </div>
          <div className="social-icon">
            <img src={pinterest_icon} alt="Pinterest Icon" />
          </div>
          <div className="social-icon">
            <img src={whatsapp_icon} alt="Whatsapp Icon" />

          </div>
       </div>

       <div className="line"></div>

        <div className="footer-copyrights">
            Copyright © 2024. All rights reserved | Designed by <span>Team CAHA</span>
        </div>

    </div>


  )
}
