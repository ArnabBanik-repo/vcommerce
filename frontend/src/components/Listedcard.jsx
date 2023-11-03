import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Listedcard = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <div className={`bg-white p-4 rounded-md shadow-md mb-4 cursor-pointer ${isFavorited ? 'border border-red-500' : ''}`}>
      <Link to={{ pathname: `/singleproduct/${product.id}` }}>
        <img src={"http://localhost:5000/img/products/"+product.photo} alt={product.title} className="mb-2 rounded-md h-auto w-64" />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
      </Link>
      <div onClick={(e) => e.stopPropagation()}>
        <button
          className={`favorite-button rounded-full p-2 ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
          onClick={toggleFavorite}
        >
          {isFavorited ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
      {/* Add other details as needed */}
    </div>
  );
};

export default Listedcard;
