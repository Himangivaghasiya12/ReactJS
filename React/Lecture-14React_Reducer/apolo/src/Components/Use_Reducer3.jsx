import React from 'react'
import { useReducer } from 'react'

/* const [state , dispatch] = useReducer(reducer , initialArg , initialValue) */


const Use_Reducer3 = () => {

  const initialValue = {
    age: 20
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          age: state.age + 1
        }
      case 'DECREMENT':
        return {
          age: state.age - 1
        }
      case 'RESET':
        {
          return initialValue
        }
      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue)

  // const handleIncrement = () => {
  //   dispatch('INCREMENT')
  // }
  // const handleDecrement = () => {
  //   dispatch('DECREMENT')
  // }
  // const handleReset = () => {
  //   dispatch('RESET')
  // }

  return (
    <div>
      <h1 className="text-4xl bg-purple-500 text-white p-4 text-center">React useReducer Hook</h1>
      <div className='flex justify-around'>
        <span>{state.age}</span>
        <button onClick={() => dispatch({type:'INCREMENT'})}>INCREMENT</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button>
        <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
      </div>
    </div>
  )
}

export default Use_Reducer3

/* Cake , Chocolate item Increment, Decrement , Reset */

/* useReducer and switch case Statement */


