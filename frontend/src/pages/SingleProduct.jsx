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
  const [isFavorited, setIsFavorited] = useState(false); 
  const [productData, setProductData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const {user, userFavourites, setUserFavourites} = useAuth()
  const {productid} = useParams();

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
    <div className="container mx-auto pt-20 grid grid-cols-2 place-items-center" >
    <div>
        <img
      src={`http://localhost:5000/img/products/${productData.photo}`}
      alt={productData.title}
      className="mb-4 rounded-md w-4/5 mx-auto"
        />
    </div>
    <div>
        <h2 className="text-2xl font-bold mb-2">{productData.title}</h2>
        <p className="text-gray-600 mb-4 capitalize text-justify">{productData.desc}</p>
        <p className="text-gray-600 mb-4 capitalize">Category: {productData.category}</p>
        <p className="text-gray-600 mb-4 capitalize">Condition: {productData.condition}</p>
        <p className="text-gray-600 mb-4 capitalize">Brand: {productData.brand}</p>
        <p className="text-gray-600 mb-4 capitalize">Price: Rs.{productData.price}</p>
        <p className="text-gray-600 mb-4 capitalize">Seller: {productData.seller.first_name} {productData.seller.last_name}</p>
        <p className="text-gray-600 mb-4 capitalize">Seller Address: {productData.seller.address}</p>
        <p className="text-gray-600 mb-4 capitalize">Seller Phone number: {productData.seller.phone}</p>
        <p className="text-gray-600 mb-4 capitalize">Listed on: {productData.createdAt.substring(0, productData.createdAt.indexOf('T'))}</p>
        
        {
          user && 
          <div>
            <button className={`rounded-lg w-40 py-3 ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={toggleFavorite}
            >
              {isFavorited ? 'Unfavorite' : 'Favorite'}
            </button>
          { productData.seller.roll === user.roll &&
            <button className='ml-3 rounded-lg w-40 py-3 bg-[#9CFF88] hover:bg-green-400 transition-all'>
              Edit Product
            </button>
          }
          </div>
        } 
    </div>

    <div className='edit-form'>
      <form>
        <input className="text-2xl font-bold mb-2" value={productData.title} />
        <input className="text-gray-600 mb-4 capitalize text-justify" value={productData.desc} />
        <input className="text-gray-600 mb-4 capitalize" value={productData.category} />
        <input className="text-gray-600 mb-4 capitalize" value={productData.condition} />
        <input className="text-gray-600 mb-4 capitalize" value={productData.brand} />
        <input className="text-gray-600 mb-4 capitalize" value={productData.price} />
      </form>
    </div>

  </div>
  ) : (
    <div> Loading... </div>
  )
};

export default SingleProduct;
