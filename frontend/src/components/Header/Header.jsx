import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper" style={{ height: '13vh' }}>
      <div className="h-container flexCenter paddings innerWidth">
        <Link to="/">
          <img src="./VcommerceLogo.png" alt="Logo" width={130} />
        </Link>

        <div className="h-menu flexCenter">
          <Link to="/userinfo">User Info</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
