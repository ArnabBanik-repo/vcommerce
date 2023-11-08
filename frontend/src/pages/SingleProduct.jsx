import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function containsObject(obj, list) {
  let i;
  for(i in list)
    if(list[i]._id === obj._id) return true;
  return false;
}

const SingleProduct = () => {
  const {user, userFavourites, setUserFavourites} = useAuth()

  const [isFavorited, setIsFavorited] = useState(false); 

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

  useEffect(() => {
    if(user && userFavourites && productData && containsObject(productData, userFavourites))
      setIsFavorited(true)
    
  }, [user, userFavourites, productData])

  const toggleFavorite = () => {
    if(!isFavorited){
      axios.get(`http://localhost:5000/api/v1/users/favourite/${productData._id}`, {withCredentials: true})
        .then(res => {
          setUserFavourites([...userFavourites, productData])
          setIsFavorited(!isFavorited);
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    } else{
      axios.get(`http://localhost:5000/api/v1/users/unfavourite/${productData._id}`, {withCredentials: true})
      .then(res => {
        setUserFavourites(() => userFavourites.filter(e => e._id !== productData._id))          
        setIsFavorited(!isFavorited);
      })
      .catch(err => {
        alert(err.response.data.message);
      });
    }
  } 

  return productData ? (
    <div className="container mx-auto mt-8 text-center">
        <img
      src={`http://localhost:5000/img/products/${productData.photo}`}
      alt={productData.title}
      className="mb-4 rounded-md h-auto w-64 mx-auto"
        />
        <h2 className="text-2xl font-bold mb-2">{productData.title}</h2>
        <p className="text-gray-600 mb-4 capitalize">{productData.desc}</p>
        <p className="text-gray-600 mb-4 capitalize">Category: {productData.category}</p>
        <p className="text-gray-600 mb-4 capitalize">Condition: {productData.condition}</p>
        <p className="text-gray-600 mb-4 capitalize">Brand: {productData.brand}</p>
        <p className="text-gray-600 mb-4 capitalize">Price: Rs.{productData.price}</p>
        <p className="text-gray-600 mb-4 capitalize">Seller: {productData.seller.first_name} {productData.seller.last_name}</p>
        <p className="text-gray-600 mb-4 capitalize">Listed on: {productData.createdAt.substring(0, productData.createdAt.indexOf('T'))}</p>
        {
          user && <button className={`favorite-button rounded-full py-3 px-6 ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
        onClick={toggleFavorite}
        >
        {isFavorited ? 'Unfavorite' : 'Favorite'}
        </button>
        } 
      </div>
  ) : (
    <div> Loading... </div>
  )
};

export default SingleProduct;
