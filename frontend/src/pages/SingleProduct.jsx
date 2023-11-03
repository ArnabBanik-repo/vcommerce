import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

  const {productid} = useParams();

  const [productData, setProductData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/products/${productid}`); 
        setProductData(response.data.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productid]);


  return productData ? (<div className="container mx-auto mt-8 text-center">
      <img
    src={`http://localhost:5000/img/products/${productData.photo}`}
    alt={productData.title}
    className="mb-4 rounded-md h-auto w-64 mx-auto"
      />
      <h2 className="text-2xl font-bold mb-2">{productData.title}</h2>
      <p className="text-gray-600 mb-4">{productData.desc}</p>
      <p className="text-gray-600 mb-4">Category: {productData.category}</p>
      <p className="text-gray-600 mb-4">Condition: {productData.condition}</p>
      <p className="text-gray-600 mb-4">Brand: {productData.brand}</p>
      <p className="text-gray-600 mb-4">Price: ${productData.price}</p>
      <p className="text-gray-600 mb-4">Seller: {productData.seller.first_name} {productData.seller.last_name}</p>
      <p className="text-gray-600 mb-4">Listed on: {productData.createdAt.substring(0, productData.createdAt.indexOf('T'))}
      </p>
      </div>
  ) : (
    <div> Test </div>
  )
};

export default SingleProduct;
