import React from 'react';

const ContactComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black" style={{ minHeight: 'calc(100vh - 13vh)' }}>
      {/* Replace '64px' with the actual height of your header */}
      <div className="text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <div className="flex items-center justify-center mb-4">
          <div className="bg-white rounded-full p-2 mr-2 flex items-center">
            {/* Font Awesome email icon */}
            <i className="fas fa-envelope text-black"></i>
          </div>
          <p className="text-sm">example@example.com</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-full p-2 mr-2 flex items-center">
            {/* Font Awesome Instagram icon */}
            <i className="fab fa-instagram text-black"></i>
          </div>
          <p className="text-sm">@instagram_handle</p>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
