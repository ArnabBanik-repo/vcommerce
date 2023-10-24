import React from 'react';
import Listedcard from './Listedcard';

const sampleProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    image: './one.jpg',
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
    image: './three.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    image: './one.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for Product 5',
    image: './two.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for Product 6',
    image: './three.jpg',
  },
  
];

const Products = () => (
  <div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4 text-center">PRODUCTS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {sampleProducts.map((product) => (
        <Listedcard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
