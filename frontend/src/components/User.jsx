import React, { useRef, useState } from 'react';
import axios from 'axios';

const User = ({ user }) => {

  const [update,setUpdate]= useState(false);

  const handleUpdate =()=>{
    setUpdate(!update);
  }

  const firstName =useRef();
  const lastName = useRef();
  const rollNo = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const address = useRef();

  const updateInfo = async (e) => 
  {
    e.preventDefault();

    try {
      const prod = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        rollNo: rollNo.current.value,
        email: email.current.value,
        phoneNumber: phoneNumber.current.value,
        address: address.current.value,
      };
      const response = await axios.patch(
        "http://localhost:5000/api/v1/users/updateMe",
        prod,
        {withCredentials: true}
      );
      if (response.data.status === "success") {
        console.log("Edit successful!");
        window.location.reload();        
      } else {
        console.error("Edit failed:", response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    }
  

  return (
    !update?
    (<div className="relative w-full pt-10 px-10 bg-cover bg-center" style={{ backgroundImage: "url('./userinfoback.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative w-full h-96 grid place-items-center text-center">
        <h1 className="font-bold text-5xl text-white">
          {user && user.first_name.toUpperCase()} {user && user.last_name.toUpperCase()}
        </h1>

        <div className="-mt-32 text-white">
          {user && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex gap-1 mb-4">
                  <p className="text-xl font-semibold mb-1">Roll No: &nbsp;</p>
                  <p className="text-xl uppercase">{user.roll}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Phone Number: &nbsp;</label>
                  <p className="text-xl">{user.phone}</p>
                </div>
              </div>

              <div>
                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Address: &nbsp;</label>
                  <p className="text-xl capitalize">{user.address}</p>
                </div>

                <div className="flex gap-1 mb-4">
                  <label className="block text-xl font-semibold mb-1">Email: &nbsp;</label>
                  <p className="text-xl">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      
      <div className="absolute bottom-4 right-4">
        <button className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-gray-300" onClick={handleUpdate}>Edit Profile</button>
      </div>
    </div>):
    (
      <div className="flex items-center justify-center mt-10 mx-10" >
  <form className=" bg-gray-100 p-8 rounded-md shadow-gray-600 shadow-md w-full">
  <div className="grid grid-cols-3 gap-4">
    {/* First Column */}
    <div className='flex flex-col '>
      <div className="mb-4 flex items-center justify-evenly">
        <label htmlFor="firstName" className="text-gray-700">First Name</label>
        <input type="text" id="firstName" name="firstName"  ref={firstName} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div className="flex items-center justify-evenly">
        <label htmlFor="lastName" className="text-gray-700">Last Name</label>
        <input type="text" id="lastName" name="lastName"  ref={lastName} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      </div>
    </div>

    {/* Second Column */}
    <div className='flex flex-col '>
      <div className="mb-4 flex items-center justify-evenly">
        <label htmlFor="roll" className="text-gray-700">Roll</label>
        <input type="text" id="rollNo" name="rollNo"  ref={rollNo} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div className="flex items-center justify-evenly">
        <label htmlFor="email" className="text-gray-700">Email</label>
        <input type="text" id="email" name="email"  ref={email} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      </div>
    </div>

    {/* Third Column */}
    <div className='flex flex-col'>
      <div className="mb-4 flex items-center justify-evenly">
        <label htmlFor="phoneNumber" className="text-gray-700">Phone</label>
        <input type="text" id="phoneNumber" name="phoneNumber"  ref={phoneNumber} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div className="flex items-center justify-evenly">
        <label htmlFor="address" className="text-gray-700">Address</label>
        <input type="text" id="address" name="address"  ref={address} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      </div>
    </div>
    </div>

    <div className="flex justify-center mt-4 items-center gap-4">
      <button
        type="submit"
        className="w-1/12 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        onClick={updateInfo}
      >
        Edit Info
      </button>

      <button
        className="w-1/12 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
        onClick={handleUpdate}
      >
        Cancel
      </button>
    </div>
  </form>
</div>

    )
  );
};

export default User;
