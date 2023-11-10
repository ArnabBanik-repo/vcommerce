import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout: authLogout } = useAuth();
  const [display, setDisplay] = useState(false);

  const handleLogout = () => {
    authLogout();
  }

  const handleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <section className="flex items-center bg-[#9CFF88] justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16" style={{ height: '10vh' }}>
      <div className="flex items-center">
        <Link to="/">
          <img src="http://localhost:5173/VcommerceLogo.png" alt="Logo" width={130} />
        </Link>
      </div>
      <div className="flex gap-4">
        {display && (
          <div className="flex items-center gap-4 text-[#0f2e1b]">
            {user && <Link to="/userinfo">User Info</Link>}
            <Link to="/products">Products</Link>
            {user && <Link to="/addlisting">Add Products</Link>}
            {user && <Link to="/favourites">Favourites</Link>}
            {!user && <Link to="/login">Login</Link>}
            {user && <button className="inline-block h-min" onClick={handleLogout}>Logout</button>}
          </div>
        )}
        <button onClick={handleDisplay}>
          <img src="/hamburger.png" alt="Hamburger" width={30} />
        </button>
      </div>
    </section>
  );
};

export default Header;
