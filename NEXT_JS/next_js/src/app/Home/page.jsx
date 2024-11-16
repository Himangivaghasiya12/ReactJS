"use client";

import React from 'react'
import { useState } from 'react'

const initialValue = 0

const Use_State = () => {
  const [state, setState] = useState(initialValue)



  const handleIncrement = () => {
    setState(state => state + 1)

  }

  const handleDecrement = () => {
    setState(state - 1)
  }
  const handleReset = () => {
    setState(initialValue)
  }

  return (
    <div className='text-center  '>
      <h1 className=' text-4xl text-white bg-purple-500 p-4 font-serif'>React useState Hook</h1>

      <span className=' text-xl  mt-20'>
        useStateHook Value :  {state}
      </span>

      <div className=" flex justify-center space-x-10 items-center min-h-screen">
        <button type="button" className='p-3 bg-purple-500 rounded-full w-40 text-white hover:text-black shadow-2xl shadow-slate-800' onClick={handleIncrement}>Increment</button>
        <button type="button" className='p-3 bg-purple-500 rounded-full w-40 text-white hover:text-black shadow-2xl shadow-slate-800' onClick={handleDecrement}>Decrement</button>
        <button type="button" className='p-3 bg-purple-500 rounded-full w-40 text-white hover:text-black shadow-2xl shadow-slate-800' onClick={handleReset}>Reset</button>
      </div>



    </div>
  )
}

export default Use_State

