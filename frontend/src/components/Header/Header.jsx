import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import { useProd } from '../../context/ProductContext';

const Header = () => {
  const { user, logout: authLogout } = useAuth();
  const [display, setDisplay] = useState(false);
  const {setProducts} = useProd();

  const query = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/api/v1/products?search=${query.current.value}`, { withCredentials: true })
      .then(res => setProducts(res.data.data.products))
      .catch(err => console.error(res));
  }

  const handleLogout = () => authLogout();
  const handleDisplay = () => setDisplay(!display);
  const handleVerify = () =>
    axios.get('http://localhost:5000/api/v1/users/generateVerifMail', { withCredentials: true })
      .then(_ => alert('Verification mail sent'))
      .catch(err => console.error(err));

  return (
    <>
      <section className="sticky flex items-center bg-[#9CFF88] justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16" style={{ height: '10vh' }}>
        <div className="flex items-center">
          <Link to="/">
            <img src="http://localhost:5173/VcommerceLogo.png" alt="Logo" width={130} />
          </Link>
        </div>
        <form className='hidden md:flex relative items-center' onSubmit={handleSubmit} >
          <input className='h-[2.4rem] w-[20rem] px-3 py-1 outline-none rounded-md' placeholder='Seach here ...' ref={query} />
          <FaArrowRight className='bg-green-400 w-[2.4rem] h-[2.4rem] p-3 absolute right-0 rounded-md bg-opacity-20 text-green-600 cursor-pointer' onClick={handleSubmit} />
        </form>
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
