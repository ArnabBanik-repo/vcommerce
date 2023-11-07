import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout: authLogout } = useAuth();

  const handleLogout = () => {
    authLogout();
  }

  return (
    <section className="h-wrapper" style={{ height: '13vh' }}>
      <div className="h-container flexCenter paddings innerWidth">
        <Link to="/">
          <img src="http://localhost:5173/VcommerceLogo.png" alt="Logo" width={130} />
        </Link>

        <div className="h-menu flexCenter">
          {user && <Link to="/userinfo">User Info</Link>}
          <Link to="/products">Products</Link>
          {user && <Link to="/favourites">Favourites</Link>}
          {!user && <Link to="/login">Login</Link>}
          {user && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </section>
  );
};

export default Header;
