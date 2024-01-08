import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ImBin } from "react-icons/im";

function containsObject(obj, list) {
  let i;
  for (i in list)
    if (list[i]._id === obj._id) return true;
  return false;
}

const SingleProduct = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [productData, setProductData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const { user, userFavourites, setUserFavourites } = useAuth()
  const { productid } = useParams();

  const title = useRef();
  const category = useRef();
  const condition = useRef();
  const brand = useRef();
  const desc = useRef();
  const price = useRef();

  const handleEdit = () => {
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/v1/products/${productData._id}`, {withCredentials: true})
    .then(res => {
      alert("Successfully deleted the product")
      navigate(-1)
    })
    .catch(err => alert(err))
  }

  const sendEdit = async (e) => {
    e.preventDefault();

    try {
      const prod = {
        title: title.current.value,
        category: category.current.value,
        condition: condition.current.value,
        brand: brand.current.value,
        desc: desc.current.value,
        price: price.current.value,
      };
      const response = await axios.patch(
        `http://localhost:5000/api/v1/products/${productData._id}`,
        prod,
        { withCredentials: true }
      );
      if (response.data.status === "success") {
        console.log("Edit successful!");
        window.location.reload();
      } else {
        console.error("Edit failed:", response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }


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
    if (user && userFavourites && productData && containsObject(productData, userFavourites))
      setIsFavorited(true)

  }, [user, userFavourites, productData])

  const toggleFavorite = () => {
    if (!isFavorited) {
      axios.get(`http://localhost:5000/api/v1/users/favourite/${productData._id}`, { withCredentials: true })
        .then(res => {
          setUserFavourites([...userFavourites, productData])
          setIsFavorited(!isFavorited);
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    } else {
      axios.get(`http://localhost:5000/api/v1/users/unfavourite/${productData._id}`, { withCredentials: true })
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
    <div className="container mx-auto pt-8 md:pt-20 md:grid md:grid-cols-2 md:place-items-center" >
      <div>
        <img
          src={`http://localhost:5000/img/products/${productData.photo}`}
          alt={productData.title}
          className="mb-4 rounded-md w-4/5 mx-auto"
        />
      </div>

      {!isOpen ?
        (<div className='px-10 mb-5'>
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
              {
                productData.seller.roll !== user.roll &&
                <button className={`rounded-lg w-40 py-3 ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
                  onClick={toggleFavorite}
                >
                  {isFavorited ? 'Unfavorite' : 'Favorite'}
                </button>
              }
              {productData.seller.roll === user.roll &&
                <button className='ml-3 rounded-lg w-40 py-3 bg-[#9CFF88] hover:bg-green-400 transition-all ' onClick={handleEdit}>
                  Edit Product
                </button>
              }
              {productData.seller.roll === user.roll &&
                <button className='text-center text-gray-200 ml-3 rounded-lg px-3 py-4 bg-red-500 hover:bg-red-700 transition-all' onClick={handleDelete}>
                  <ImBin />
                </button>
              }
            </div>
          }
        </div>) :

        (<div className="edit-form w-8/12">
          <form className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit Listing</h1>

            <div className="mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Title"
                ref={title}
              />
            </div>

            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Category"
                ref={category}
              >
                <option value="" disabled selected>Select Category</option>
                <option value="book">Book</option>
                <option value="cycle">Cycle</option>
                <option value="household">Household</option>
                <option value="misc">Misc</option>
                <option value="garments">Garments</option>
                <option value="accessory">Accessory</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Condition"
                ref={condition}
              >
                <option value="" disabled selected>Select Condition</option>
                <option value="new">New</option>
                <option value="almost new">Almost New</option>
                <option value="fairly old">Fairly Old</option>
                <option value="very old">Very Old</option>
              </select>
            </div>

            <div className="mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Brand"
                ref={brand}
              />
            </div>

            <div className="mb-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Description"
                ref={desc}
              />
            </div>

            <div className="mb-4">
              <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Price"
                ref={price}
              />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-4">
                <button
                  type="submit"
                  className="w-1/3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none "
                  onClick={sendEdit}
                >
                  Edit Listing
                </button>

                <button
                  className="w-1/3 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none"
                  onClick={handleEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
        )}

    </div>
  ) : (
    <div> Loading... </div>
  )
};

export default SingleProduct;
