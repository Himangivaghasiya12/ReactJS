import React from 'react'
import Navbar from '../components/Navbar'
import { Link , Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-4xl text-center mt-28 font-semibold'>This is Shop Page</h1>
      <Link to="newproduct">NewProduct</Link>
      <Link to="oldproduct">OldProduct</Link>
      <Outlet/>
    </div>
  )
}

export default Shop
