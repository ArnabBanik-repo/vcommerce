import React from 'react'
import lol from '../assets/giphy.gif'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='grid place-items-center h-[90vh] px-5'>
      <p className='text-lg'>Hey, we know you're lost out here ... But don't worry, we are never gonna give you up 😄</p>
      <img src={lol} alt="loading..." className='w-[40rem]'/>
      <p className='text-lg'>Here, try this link (I promise it's not a rick roll 😉) <Link to={'/products'} className='text-blue-600 underline'>Awesome Link</Link></p>
    </div>
  )
}

export default PageNotFound
