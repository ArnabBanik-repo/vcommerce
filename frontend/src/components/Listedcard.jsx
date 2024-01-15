import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import env from '../config';

function containsObject(obj, list) {
  let i;
  for(i in list)
    if(list[i]._id === obj._id) return true;
  return false;
}

const Listedcard = ({ product }) => {
  const {userFavourites, setUserFavourites} = useAuth()

  const [isFavorited, setIsFavorited] = useState(false); 

  useEffect(() => {
    if(userFavourites && containsObject(product, userFavourites))
      setIsFavorited(true)
  }, [userFavourites])

  const toggleFavorite = () => {
    if(!isFavorited){
      axios.get(`${env.BACKEND_URI}/api/v1/users/favourite/${product._id}`, {withCredentials: true})
        .then(res => {
          setUserFavourites([...userFavourites, product])
          setIsFavorited(!isFavorited);
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    } else{
      axios.get(`${env.BACKEND_URI}/api/v1/users/unfavourite/${product._id}`, {withCredentials: true})
      .then(res => {
        setUserFavourites(() => userFavourites.filter(e => e._id !== product._id))          
        setIsFavorited(!isFavorited);
      })
      .catch(err => {
        alert(err.response.data.message);
      });
    }
  };

  return (
    <div className={`p-4 rounded-md shadow-md mb-4 transition-all cursor-pointer border border-transparent ${isFavorited ? 'border-red-500' : 'hover:border-[#9CFF88]'}`}>
      <Link to={{ pathname: `/singleproduct/${product._id}` }}>
      <img src={`${env.BACKEND_URI}/img/products/`+product.photo} alt={product.title} className="mb-2 rounded-md" />
      </Link>
      <div className='flex items-center justify-between'>
      <Link to={{ pathname: `/singleproduct/${product._id}` }}>
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-md">₹{product.price}</p>
      </Link>
      <div onClick={(e) => e.stopPropagation()}>
        <button
        className={`favorite-button rounded-md py-2 transition-all px-5 ${isFavorited ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-300 hover:bg-[#9CFF88] text-black'}`}
        onClick={toggleFavorite}>
          {isFavorited ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
      </div>
    </div>
  );
};

export default Listedcard;
