// Updated CardComponent.jsx
import React from 'react';

const Card = ({ cardeach }) => (
  <div style={{ display: 'flex' }}>
    {cardeach.map((card, index) => (
      <div key={index} style={{ marginRight: '20px' }}>
        <img src={card.picture} alt={card.title} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    ))}
  </div>
);

export default Card;
