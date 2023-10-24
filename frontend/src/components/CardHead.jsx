import React from 'react';

const CardHead = ({ headings, onClick }) => (
  <div className='flexCenter innerWidth'>
    {headings.map((heading, index) => (
      <div 
        key={index} 
        onClick={() => onClick(index)}
        style={{ marginRight: '10px' }} 
      >
        {heading}
      </div>
    ))}
  </div>
);

export default CardHead;
