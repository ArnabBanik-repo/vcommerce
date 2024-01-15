import React, { useRef } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import env from '../config'

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
        `${env.BACKEND_URI}/api/v1/users/updateMe`,
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
      if(error.response.data.message === 'CONSTRAINT `user_chk_2` failed for `test`.`user`')
        alert('Please enter a valid VIT email only');
      else
        alert('Please check your details and try again');
      console.log(error);
    }
  }

  return (
    <div className='h-[90vh] grid grid-cols-1 place-items-center'>
      <form className='h-max w-80 shadow-md grid place-items-center p-8 rounded-md gap-5' onSubmit={updateInfo}>
        <p className='text-xl text-bolder mb-4'>Edit Profile</p>
        <div className='mb-2 w-full'>
          <p className='text-left'>Email ID</p>
          <input type='email' className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' placeholder={user.email} ref={mail} />
        </div>
        <div className='mb-2 w-full'>
          <p className='text-left'>Address</p>
          <input className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' placeholder={user.address} ref={address} />
        </div>
        <div className='mb-2 w-full'>
          <p className='text-left'>Phone Number</p>
          <input type='text' minLength={10} maxLength={10} className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' placeholder={user.phone} ref={phone} />
        </div>
        <div className='flex w-full justify-center gap-4'>
          <button className='outline-none border-none text-white bg-blue-500 hover:bg-blue-700 transition-all hover:shadow-md px-4 py-2 rounded-md'>Update Profile</button>
          <button className='outline-none border-none text-white bg-red-500 hover:bg-red-700 transition-all hover:shadow-md px-4 py-2 rounded-md' onClick={handleUpdate}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser
