import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const HomeFooter = () => {
  return (
    <div className='w-full bg-black py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>VCommerce</h1>
        <p className='py-4'> Home made with love and care @Arnab @Ankan</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
        
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
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