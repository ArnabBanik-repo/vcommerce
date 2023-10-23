// HeadingComponent.jsx
import React from 'react';

const CardHead = ({ headings, onClick }) => (
  <div className='flexCenter innerWidth'>
    {headings.map((heading, index) => (
      <div 
      key={index} onClick={() => onClick(index)}>
        {heading}
      </div>
    ))}
  </div>
);

export default CardHead;
