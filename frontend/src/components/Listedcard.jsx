import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

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
      axios.get(`http://localhost:5000/api/v1/users/favourite/${product._id}`, {withCredentials: true})
        .then(res => {
          setUserFavourites([...userFavourites, product])
          setIsFavorited(!isFavorited);
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    } else{
      axios.get(`http://localhost:5000/api/v1/users/unfavourite/${product._id}`, {withCredentials: true})
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
    <div className={`w-80 p-4 rounded-md shadow-md mb-4 cursor-pointer ${isFavorited ? 'border border-red-500' : ''}`}>
      <Link to={{ pathname: `/singleproduct/${product._id}` }}>
      <img src={"http://localhost:5000/img/products/"+product.photo} alt={product.title} className="mb-2 rounded-md" />
      </Link>
      <div className='flex items-center justify-between'>
      <Link to={{ pathname: `/singleproduct/${product._id}` }}>
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-md">Price: Rs.{product.price}</p>
      </Link>
      <div onClick={(e) => e.stopPropagation()}>
        <button
        className={`favorite-button rounded-md py-2 px-5 ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
        onClick={toggleFavorite}>
          {isFavorited ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
      </div>
    </div>
  );
};

export default Listedcard;
