import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className='h-wrapper'>

        <div className="h-container flexCenter paddings innerWidth">
            <img src="./VcommerceLogo.png" alt="Logo" width={130} />

            <div className="h-menu flexCenter">
                <a href="">User Info</a>
                <a href="">Products</a>
                <a href="">Categories</a>
                <a href="">Contact Us</a>
                
            </div>
        </div>
        
        
    </section>
  )
}

export default Header