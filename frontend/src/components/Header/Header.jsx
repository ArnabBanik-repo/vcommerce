import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout: authLogout } = useAuth();

  const handleLogout = () => {
    authLogout();
  }

  return (
    <section className="flex items-center bg-[#9CFF88] justify-center px-56" style={{ height: '10vh' }}>
      <div className="w-1/2 flex">
        <Link to="/">
          <img src="http://localhost:5173/VcommerceLogo.png" alt="Logo" width={130} />
        </Link>
      </div>
        <div className="gap-10 flex justify-end w-1/2 text-[#2F4858]">
          {user && <Link to="/userinfo">User Info</Link>}
          <Link to="/products">Products</Link>
          {user && <Link to="/favourites">Favourites</Link>}
          {!user && <Link to="/login">Login</Link>}
          {user && <button className="inline-block h-min" onClick={handleLogout}>Logout</button>}
        </div>
    </section>
  );
};

export default Header;
