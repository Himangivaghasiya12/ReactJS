import React from 'react'
import { useRef } from 'react'

const UseRef = () => {

  const inputReference = useRef()

  console.log(inputReference);

  const handleClick = () => {
    inputReference.current.style.height = "100px"
    inputReference.current.style.width = "100px"
    inputReference.current.style.backgroundColor = "green"
  }

  return (
    <div>
      <div ref={inputReference}></div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default UseRef
