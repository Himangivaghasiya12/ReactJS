import React from 'react'
import {useState} from 'react'

/* useReducer */

/* const [state , dispatch] = useReducer(reducer , initialArg , initialValue) */

const Use_Reducer = () => {

  const [count , setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  
  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }


  return (
    <div>
    <h1 className="text-4xl bg-purple-500 text-white p-4 text-center">React useReducer Hook</h1>
      <span>{count}</span>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Use_Reducer
