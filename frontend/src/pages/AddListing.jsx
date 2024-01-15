import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AccessDenied from './AccessDenied';
import { useAuth } from '../context/AuthContext';
import env from '../config';

const AddListing = () => {
  const {user} = useAuth();
  const title = useRef();
  const category  = useRef();
  const condition  = useRef();
  const brand  = useRef();
  const desc  = useRef();
  const price  = useRef();
  const [photo, setPhoto] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('photo', photo);

      const otherData = {
        title:title.current.value,
        category:category.current.value,
        condition:condition.current.value,
        brand:brand.current.value,
        desc:desc.current.value,
        price:price.current.value,
      };

      Object.keys(otherData).forEach((key) => {
        formData.append(key, otherData[key]);
      });

      await axios.post(
        `${env.BACKEND_URI}/api/v1/products`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      alert("Product Listed");
      navigate(0);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  if (!user)
    return <AccessDenied />

  return (
    <div className="min-h-[90vh] grid place-items-center">
      <form onSubmit={handleSubmit} className="bg-gray-100 my-5 md:my-10 mx-4 p-8 rounded-md shadow-md md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Add Listing</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            ref={title}
            className="w-full py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <select
            ref={category}
            className="w-full py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="book">Book</option>
            <option value="cycle">Cycle</option>
            <option value="household">Household</option>
            <option value="misc">Misc</option>
            <option value="garments">Garments</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="condition" className="block text-sm font-medium">
            Condition
          </label>
          <select
            ref={condition}
            className="w-full py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a condition</option>
            <option value="new">New</option>
            <option value="almost new">Almost New</option>
            <option value="fairly old">Fairly Old</option>
            <option value="very old">Very Old</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium">
            Brand
          </label>
          <input
            ref={brand}
            className="w-full py-2 px-3 bg-white  rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>



        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            ref={desc}
            className="w-full py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price(in ₹)
          </label>
          <input
            ref={price}
            className="w-full py-2 px-3 bg-white  rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium">
            Product Image
          </label>
          <input type="file" id="photo" name="photo" accept="image/png, image/jpeg"
            onChange={handlePhotoChange}
            className="w-full py-2 px-3 bg-white  rounded-md focus:outline-none focus:border-blue-500"
            required />

        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;
