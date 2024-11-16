import React from 'react'
import { useReducer } from 'react'

/* const [state , dispatch] = useReducer(reducer , initialArg , initialValue) */


const Use_Reducer2 = () => {

  const initialValue = {
    age:20
  }

  const reducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return {
          age: state.age + 1
        }
      case 'DECREMENT':
        return {
          age: state.age - 1
        }
      case 'RESET':
        return initialValue

      default: return state
  
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  const handleIncrement = () => {
    dispatch('INCREMENT')
  }
  const handleDecrement = () => {
    dispatch('DECREMENT')
  }
  const handleReset = () => {
    dispatch('RESET')
  }

  return (
    <div>
      <h1 className="text-4xl bg-purple-500 text-white p-4 text-center">React useReducer Hook</h1>
      <div className='flex justify-around'>
        <span>{state.age}</span>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default Use_Reducer2
