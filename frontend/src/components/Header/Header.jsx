import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import { useProd } from '../../context/ProductContext';
import VCommerceLogo from '../../assets/VcommerceLogo.png';
import Hamburger from '../../assets/hamburger.png';
import env from '../../config';

const Header = () => {
  const { user, logout: authLogout } = useAuth();
  const [display, setDisplay] = useState(false);
  const { setProducts } = useProd();

  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${env.BACKEND_URI_LOCAL}/api/v1/products?search=${query}`, { withCredentials: true })
      .then(res => setProducts(res.data.data.products))
      .catch(err => console.error(res));
  }

  const handleLogout = () => authLogout();
  const handleDisplay = () => setDisplay(!display);
  const handleVerify = () =>
    axios.get(`${env.BACKEND_URI_LOCAL}/api/v1/users/generateVerifMail`, { withCredentials: true })
      .then(_ => alert('Verification mail sent'))
      .catch(err => console.error(err));

  return (
    <>
      <section className="sticky flex items-center bg-[#9CFF88] justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16" style={{ height: '10vh' }}>
        <div className="flex items-center">
          <Link to="/">
            <img src={VCommerceLogo} alt="Logo" className='w-20 md:w-32' />
          </Link>
        </div>
        {location.pathname === '/products' &&
          <form className='md:flex relative items-center' onSubmit={handleSubmit} >
            <input className='h-[2.4rem] w-36 md:w-[20rem] px-3 py-1 outline-none rounded-md' placeholder='Seach here ...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <FaArrowRight className='bg-green-400 w-[2.4rem] h-[2rem] p-3 absolute top-1 right-1 rounded-md bg-opacity-20 text-green-600 cursor-pointer' onClick={handleSubmit} />
          </form>
        }
        <button className='outline-0 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center p-2 bg-opacity-40 ' onClick={handleDisplay}>
          <img src={Hamburger} alt="Hamburger" width={30} />
        </button>
        <div className={`top-20 right-10 absolute bg-gray-200 w-44 rounded-md transition-all ${display ? 'block' : 'hidden'}`} style={{ zIndex: 100 }} onClick={() => handleDisplay()}>
          {user && <Link className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' to="/userinfo">User Info</Link>}
          <Link className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' to="/products">Products</Link>
          {user && <Link className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' to="/addlisting">Add Products</Link>}
          {user && <Link className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' to="/favourites">Favourites</Link>}
          {!user && <Link className='h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all' to="/login">Login</Link>}
          {user && <button className="h-16 px-4 flex items-center border-b border-gray-400 hover:bg-gray-300 rounded-md cursor-pointer transition-all w-full" onClick={handleLogout}>Logout</button>}
        </div>
      </section>
      {
        user && !user.is_validated &&
        <div className='bg-red-500 py-3 text-white text-lg text-center flex justify-center items-center gap-5' >
          <p>Your email is not yet verified</p>
          <button className='py-1 px-2 rounded-md border-2 border-red-700 hover:bg-red-700 transition-all' onClick={handleVerify}>Verify Email</button>
        </div>
      }
    </>
  );
};

export default Header;
