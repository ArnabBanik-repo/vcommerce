import React, { useState } from 'react';
import axios from 'axios';

const AddListing = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [brand, setBrand] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');

  const handlePhotoChange = (e) => {
   
    const file = e.target.files[0]; // Get the first file from the array
    setPhoto(file);
    
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();
    formData.append('photo', photo);

    const otherData = {
      title,
      category,
      condition,
      brand,
      desc,
      price,
    };

    Object.keys(otherData).forEach((key) => {
      formData.append(key, otherData[key]);
    });

    const response = await axios.post(
      'http://localhost:5000/api/v1/products',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );


      console.log('Product added successfully:', response.data);

      // Optionally, you can redirect the user or perform other actions
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-md shadow-black shadow-md w-8/12">
        <h2 className="text-2xl font-bold mb-4">Add Listing</h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
  <label htmlFor="category" className="block text-sm font-medium">
    Category
  </label>
  <select
    id="category"
    name="category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
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
    id="condition"
    name="condition"
    value={condition}
    onChange={(e) => setCondition(e.target.value)}
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
            type="text"
            id="brand"
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full py-2 px-3 bg-white  rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
       


        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium">
          Description
          </label>
          <textarea
    id="desc"
    name="desc"
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
    className="w-full py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500"
    required
  />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price(in ₹)
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
