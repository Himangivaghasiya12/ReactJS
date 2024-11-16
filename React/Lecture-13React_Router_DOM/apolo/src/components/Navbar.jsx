import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-gray-500 p-6 justify-around items-center text-white border-b-4 border-b-black'>
      <div>
        <NavLink to="/">
          <span className='text-4xl font-semibold'>RUBIX</span>
        </NavLink>
      </div>
      <div>
        <ul className='flex space-x-16'>
          <li>
            <NavLink className='text-xl font-semibold hover:underline hover:text-black' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='text-xl font-semibold hover:underline hover:text-black' to="/aboutus">AboutUs</NavLink>
          </li>
          <li>
            <NavLink className='text-xl font-semibold hover:underline hover:text-black' to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink className='text-xl font-semibold hover:underline hover:text-black' to="/contactus">ContactUs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
