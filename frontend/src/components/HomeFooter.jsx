import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const HomeFooter = () => {

  const { user } = useAuth();
  return (
    <div className='w-full bg-black p-8 text-white pt-16'>
      <h1 className='w-full text-4xl font-bold text-[#00df9a] text-center'>VCommerce</h1>
      <div className='md:w-1/4 h-[1px] bg-green-500 mx-auto my-4'></div>
      <div className='grid place-items-center md:grid-cols-2 md:w-1/4 mx-auto my-6 text-lg gap-2 md:gap-0'>
        <Link className='flex items-center gap-1' to={'https://www.instagram.com/arnabbanik5'}>
          <FaInstagram />
          <p>Arnab Banik</p>
        </Link>
        <Link className='flex items-center gap-1' to={'https://www.instagram.com/rayankan16'}>
          <FaInstagram />
          <p>Ankan Ray</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter;
