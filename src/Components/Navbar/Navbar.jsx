import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

import './Navbar.css';

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Logout = async()=>{
    try{
      const response = await fetch('http://localhost:4000/api/users/logout',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json', 
        }
      });

      const data = await response.json();
      
      if(data.success){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token_expiration');
        setIsLoggedIn(false);
        window.location.replace('/signin')
      }
      else{
        console.log('logout failed')
      }
    }
    catch(e){
      console.log((e.message))
    }
  }

  useEffect(() => {
    // Check if session has expired
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      const tokenExpiration = localStorage.getItem('token_expiration');
      if (tokenExpiration && new Date(tokenExpiration) > new Date()) {
        // Session is valid
        setIsLoggedIn(true);
      }
      else {
        // Session has expired, clear token
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token_expiration');
      }
    }
  }, []);

  const navigation = useNavigate();
  const { totalCartItems } = useContext(ShopContext);
  
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          #CAHA <span>ESHOP</span>
        </div>
        <ul>
          <li><NavLink to="/">Shop</NavLink></li>
          <li><NavLink to="/mens">Mens</NavLink></li>
          <li><NavLink to="/womens">Womens</NavLink></li>
          <li><NavLink to="/kids">Kids</NavLink></li>
        </ul>
        <div className="nav-2">
          <div className="cart">
            <NavLink to="/cart"><img id='cart_icon' src={cart_icon} alt="cart_icon" /></NavLink>
            <div id="cart_count">{totalCartItems()}</div>
          </div>
          <button id='btn' onClick={() => navigation(isLoggedIn?Logout():'/signin')}>
            {isLoggedIn ? <span>Logout</span> : <span>Login</span>}
          </button>
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}
