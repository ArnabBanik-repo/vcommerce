import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {

  const navigate = useNavigate();
  const {id} = useParams(); 
  const pass = useRef();
  const cpass = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(pass.current.value !== cpass.current.value) {
      alert("Both passwords do not match");
      return;
    }

     axios.post(`http://localhost:5000/api/v1/users/resetPassword/${id}`, {password: pass.current.value}, {withCredentials: true})
     .then(_ => {
       alert("Password reset successfully");
       navigate('/login');
     })
    .catch(err => console.error(err))
  }

  return (
    <div className='h-[90vh] grid grid-cols-1 place-items-center'>
      <form onSubmit={handleSubmit} className='h-max w-80 shadow-md grid place-items-center py-8 px-5 rounded-md gap-5'>
        <p className='text-xl text-bolder mb-4'>Reset Password</p>
        <div className='mb-2'>
          <p className='text-left'>New Password</p>
          <input type='password' className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' required ref={pass} />
        </div>
        <div className='mb-2'>
          <p className='text-left'>Confirm Password</p>
          <input type='password' className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' required ref={cpass} />
        </div>
        <button className='outline-none border-none text-white bg-blue-500 hover:bg-blue-700 transition-all hover:shadow-md px-4 py-2 rounded-md'>Reset Password</button>
      </form>
    </div>
  )
}

export default ResetPassword
