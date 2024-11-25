import React from 'react'

const Example3 = (props) => {
  return (
    <div>
      <h1 className='text-4xl text-center font-black bg-blue-500 p-2'>React Conditional Rendering</h1>
      <div className='bg-slate-400 flex justify-center h-[80vh] items-center'>
        <ul>
          <ProductStock name="furniture" isStocked={true} />
          <ProductStock name="home-decore" isStocked={true} />
          <ProductStock name="kitchen" isStocked={false} />
          <ProductStock name="lighting" isStocked={true} />
          <ProductStock name="bath" isStocked={false} />
        </ul>
      </div>
    </div>
  )
}

export const ProductStock = ({ name, isStocked }) => {
  return <li>
    {name} {isStocked && 'is Stocked'}
  </li>
}

export default Example3