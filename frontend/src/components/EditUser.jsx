import React, { useRef } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const EditUser = ({ handleUpdate }) => {
  const { user } = useAuth()
  const mail = useRef();
  const phone = useRef();
  const address = useRef();

  const updateInfo = async (e) => {
    e.preventDefault();

    try {
      const prod = {
        email: mail && mail.current.value,
        phone: phone && phone.current.value,
        address: address && address.current.value,
      };
      const response = await axios.patch(
        "http://localhost:5000/api/v1/users/updateMe",
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
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center mt-10 mx-10" >
      <form className=" bg-gray-100 p-8 rounded-md shadow-gray-600 shadow-md w-1/2">
        <div className="grid">
          <div className='flex flex-col'>
            <div className="mb-4 flex items-center justify-evenly">
              <label htmlFor="phone" className="text-gray-700">Email</label>
              <input ref={mail} placeholder={user.email} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4 flex items-center justify-evenly">
              <label htmlFor="address" className="text-gray-700">Address</label>
              <input ref={address} placeholder={user.address} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4 flex items-center justify-evenly">
              <label htmlFor="phone" className="text-gray-700">Phone</label>
              <input ref={phone} placeholder={user.phone} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 items-center gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            onClick={updateInfo}
          >
            Edit Info
          </button>

          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
            onClick={handleUpdate}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUser
