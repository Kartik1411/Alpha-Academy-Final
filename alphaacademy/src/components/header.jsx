import React from 'react';
import './../styles/header.css';
import iconfront from "../image/logo.png";

function Header () {

    return(
    <nav>
        
            <img src={iconfront} alt="" className="icon-image"/>
        
    </nav>
)
}

export default Header;