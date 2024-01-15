import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate} from 'react-router-dom';
import env from '../config';

const ChangePassword = ({ handleChange }) => {
  const navigate = useNavigate();

  const orig = useRef();
  const pass = useRef();
  const cpass = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass.current.value !== cpass.current.value) {
      alert("Both passwords do not match");
      return;
    }

    axios.patch(`${env.BACKEND_URI}/api/v1/users/updatePassword`, { password: orig.current.value, newPassword: pass.current.value }, { withCredentials: true })
      .then(_ => {
        alert("Password changed successfully");
        handleChange();
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='h-[90vh] grid grid-cols-1 place-items-center'>
      <form className='h-max w-80 shadow-md grid place-items-center py-8 px-5 rounded-md gap-5'>
        <p className='text-xl text-bolder mb-4'>Change Password</p>
        <div className='mb-2'>
          <p className='text-left'>Current Password</p>
          <input type='password' className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' required ref={orig} />
        </div>
        <div className='mb-2'>
          <p className='text-left'>New Password</p>
          <input type='password' className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' required ref={pass} />
        </div>
        <div className='mb-2'>
          <p className='text-left'>Confirm Password</p>
          <input type='password' className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' required ref={cpass} />
        </div>
        <div className='flex w-full justify-center gap-4'>
          <button className='outline-none border-none text-white bg-blue-500 hover:bg-blue-700 transition-all hover:shadow-md px-4 py-2 rounded-md' onClick={handleSubmit}>Change Password</button>
          <button className='outline-none border-none text-white bg-red-500 hover:bg-red-700 transition-all hover:shadow-md px-4 py-2 rounded-md' onClick={handleChange}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword
