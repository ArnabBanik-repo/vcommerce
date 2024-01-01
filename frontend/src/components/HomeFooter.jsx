import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const HomeFooter = () => {

  const { user} = useAuth();
  return (
    <div className='w-full bg-black py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>VCommerce</h1>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
        
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Write to us</h6>
        <ul>
            <li className='py-2 text-sm'>eagleray962@gmail.com</li>
            
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Pages</h6>
        <ul>
            <li className='py-2 text-sm'>{!user && <Link to="/login">Login</Link>}</li>
            <li className='py-2 text-sm'><Link to="/products">Products</Link></li>
            <li className='py-2 text-sm'>{user && <Link to="/addlisting">Add Products</Link>}</li>
            <li className='py-2 text-sm'>{user && <Link to="/favourites">Favourites</Link>}</li>
        </ul>
    </div>
    <div>
  <h6 className='font-medium text-gray-400'>About us </h6>
  Just two guys trying to make it work... <br />
  Connect with us personally at:
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li className='py-2 text-sm flex items-center'>
      <a href='https://www.instagram.com/arnabbanik5/' target='_blank' rel='noopener noreferrer' className='flex items-center'>
        <FaInstagram size={30} className='mr-2' />
        Arnab
      </a>
    </li>
    <li className='py-2 text-sm flex items-center'>
      <a href='https://www.instagram.com/rayankan16/' target='_blank' rel='noopener noreferrer' className='flex items-center'>
        <FaInstagram size={30} className='mr-2' />
        Ankan
      </a>
    </li>
  </ul>
</div>

  
      </div>
    </div>
  );
};

export default HomeFooter;