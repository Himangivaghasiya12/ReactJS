import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-gray-500 p-6 justify-around items-center text-white border-b-4 border-b-black'>
      <div>
        <Link to="/">
          <span className='text-4xl font-semibold'>RUBIX</span>
        </Link>
      </div>
      <div>
        <ul className='flex space-x-16'>
          <li>
            <Link className='text-xl font-semibold hover:underline hover:text-black' to="/">Home</Link>
          </li>
          <li>
            <Link className='text-xl font-semibold hover:underline hover:text-black' to="/aboutus">AboutUs</Link>
          </li>
          <li>
            <Link className='text-xl font-semibold hover:underline hover:text-black' to="/shop">Shop</Link>
          </li>
          <li>
            <Link className='text-xl font-semibold hover:underline hover:text-black' to="/contactus">ContactUs</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
