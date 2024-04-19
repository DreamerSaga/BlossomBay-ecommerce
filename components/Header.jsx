import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Header.css'
export default function Header(){
    return(
      <header className="header">

      <div className="logo">
      <img className="logo" src="./logo3.png" alt="logo" width={500} />
      </div>

      <div className="spacer"></div>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="spacer"></div>

      <div className="user-options">
        <a href="#">Login / Sign Up</a>
        <span className="separator">|</span>
        <a href="#">Become a Seller</a>
      </div>
      
      <div className="spacer"></div>

      <div className="basket">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
  
    </header>
      
   
    )
}