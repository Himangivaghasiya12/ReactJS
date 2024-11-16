import React from 'react'
import logo from '../assets/Batman.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const data = useSelector((state) => state.cart)

  const result = data.length

  console.log('Navbar' , result);
  return (
    <div>
      <div className='bg-gray-500 text-white flex justify-between items-center px-16 p-4'>
        <div>
          <Link to="/">
            <img src={logo} alt="" className='h-16' />
          </Link>
        </div>
        <div>
          <ul className='flex space-x-20'>
            <li className='text-2xl font-semibold
            '><NavLink to="/">Home</NavLink></li>
            <li className='text-2xl font-semibold
            '><NavLink to="/shop">Shop</NavLink></li>
            <li className='text-2xl font-semibold
            '><NavLink to="/wishlist">Wishlist</NavLink></li>
            <li className='text-2xl font-semibold
            '>
              <NavLink to="/cart">
              <FaShoppingCart />
              <span>{result}</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Navbar
