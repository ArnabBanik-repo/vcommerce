
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftColumnStyle}>
        <div style={logoStyle}>Your Logo</div>
        <div style={sloganStyle}>Your Slogan</div>
        <div style={socialMediaStyle}>
          {/* Add your social media icons or links here */}
          Social Media Icons
        </div>
      </div>
      <div style={rightColumnStyle}>
        <div style={columnStyle}>
          <h4>Help</h4>
          <p>FAQs</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>
        <div style={columnStyle}>
          <h4>Contact Us</h4>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  backgroundColor: 'black',
  color: '#ecf0f1',
  padding: '20px 10px',
};

const leftColumnStyle = {
  flex: '1',
};

const rightColumnStyle = {
  flex: '3',
  display: 'flex',
};

const columnStyle = {
  flex: '1',
  marginRight: '20px',
};

const logoStyle = {
  marginBottom: '10px',
  // Add your logo styles here
};

const sloganStyle = {
  marginBottom: '10px',
  // Add your slogan styles here
};

const socialMediaStyle = {
  // Add your social media styles here
};

export default Footer;
