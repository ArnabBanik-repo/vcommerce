import React from 'react'
import accessDenied from '../assets/no-entry.webp'
import { Link } from 'react-router-dom'

const AccessDenied = () => {
  return (
    <div className='h-[90vh] pt-20'>
      <p className='font-bold text-lg md:text-2xl text-center mb-2'>Woah, woah, slow down there. You are not logged in yet.</p>
      <img src={accessDenied} alt='No Entry' className='w-60 md:w-[30rem] absolute top-[55%] md:top-[50%] left-[50%] -translate-y-[40%] -translate-x-[50%]' />
      <p className='text-center'>Here try this ... <Link to={'/login'} className='text-blue-600 underline'>Login Page</Link></p>
    </div>
  )
}

export default AccessDenied
