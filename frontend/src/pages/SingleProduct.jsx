import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

    
const {productid} = useParams();

const [productData, setProductData] = useState({
    
        "_id": "6537830b402223ff495003bc",
        "title": "Ankan's Guitar",
        "photo": "user-20bds0038-1698136842993.jpeg",
        "desc": "an acoustic guitar with an average sound quality",
        "category": "misc",
        "condition": "fairly old",
        "brand": "yemaha",
        "price": 100,
        "seller": "20bds0038",
        "createdAt": "2023-10-24T08:40:43.067Z",
        "__v": 0
    
});

// useEffect(() => {
//     // Make a request to the backend API to fetch product details based on productId
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/products/${productid}`); // Adjust the API endpoint accordingly
//         setProductData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchData();
//   }, [productid]);

//   if (!productData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="container mx-auto mt-8 text-center">
      <img
        src={`/path/to/your/images/${productData.photo}`}
        alt={productData.title}
        className="mb-4 rounded-md h-auto w-64 mx-auto"
      />
      <h2 className="text-2xl font-bold mb-2">{productData.title}</h2>
      <p className="text-gray-600 mb-4">{productData.desc}</p>
      <p className="text-gray-600 mb-4">Category: {productData.category}</p>
      <p className="text-gray-600 mb-4">Condition: {productData.condition}</p>
      <p className="text-gray-600 mb-4">Brand: {productData.brand}</p>
      <p className="text-gray-600 mb-4">Price: ${productData.price}</p>
      <p className="text-gray-600 mb-4">Seller: {productData.seller}</p>
      <p className="text-gray-600 mb-4">Created At: {productData.createdAt}</p>
      {/* Add other details as needed */}
    </div>
  );

};

export default SingleProduct;
