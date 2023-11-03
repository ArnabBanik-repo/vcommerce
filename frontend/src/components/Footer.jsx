import React from 'react';

const Footer = () => {
  return (
    <footer className="flex bg-black text-white p-5">
      <div className="flex-none w-1/2 pr-8">
        
        <div className="mb-4">Your Logo</div>
        <div className="mb-4">Your Slogan</div>
        <div>
          
          Social Media Icons
        </div>
      </div>
      <div className="flex-1 flex">
        
        <div className="flex-1 pr-4">
          
          <h4 className="mb-2">Help</h4>
          <p>FAQs</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>
        <div className="flex-1">
          
          <h4 className="mb-2">Contact Us</h4>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
