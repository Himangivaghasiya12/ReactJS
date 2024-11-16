import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>This is New Product</h1>
      <button onClick={() => navigate('/')}>Click To Home</button>
    </div>
  )
}

export default NewProduct
