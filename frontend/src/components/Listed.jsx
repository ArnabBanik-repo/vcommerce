import React from 'react';
import Listedcard from './Listedcard';


const sampleListings = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    image: './three.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: './two.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: './one.jpg',
  },
];

const Listed = () => (
  <div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4 text-center">YOUR LISTINGS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {sampleListings.map((product) => (
        <Listedcard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Listed;
