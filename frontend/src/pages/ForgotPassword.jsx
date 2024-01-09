import axios from 'axios';
import React, { useRef } from 'react'
import env from '../config';

const ForgotPassword = () => {

  const roll = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${env.BACKEND_URI_LOCAL}/api/v1/users/forgotPassword`, { roll: roll.current.value }, { withCredentials: true })
      .then(_ => alert("Password Reset Link sent successfully to your mail"))
      .catch(err => alert(err))

  }

  return (
    <div className='h-[90vh] grid grid-cols-1 place-items-center'>
      <form onSubmit={handleSubmit} className='h-max w-80 shadow-md grid place-items-center py-8 px-5 rounded-md gap-5'>
      <p className='text-xl text-bolder mb-4'>Forgot Password</p>
        <div className='mb-2'>
          <p className='text-left'>Roll Number</p>
          <input className='w-full py-2 px-3 bg-gray-200 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:border-2' maxLength={9} min={9} required ref={roll} />
        </div>
        <button className='text-white bg-blue-500 hover:bg-blue-700 transition-all hover:shadow-md px-4 py-2 rounded-md'>Send Reset Link</button>
      </form>
    </div>
  )
}

export default ForgotPassword
