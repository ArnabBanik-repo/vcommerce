import React from 'react';
import { Link } from 'react-router-dom';

const Listedcard = ({ product }) => (
  <Link to={{ pathname: `/singleproduct/${product.id}` }}>
    <div className="bg-white p-4 rounded-md shadow-md mb-4 cursor-pointer">
      <img src={product.image} alt={product.title} className="mb-2 rounded-md h-auto w-64" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      {/* Add other details as needed */}
    </div>
  </Link>
);

export default Listedcard;
