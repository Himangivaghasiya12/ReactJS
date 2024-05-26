import React from 'react'
import Com_C from './Com_C'

const Com_B = ({name}) => {
  return (
    <div>
        <h1>This is a Com_A</h1>
        <span className="bg-red-500">{name}</span>
        <Com_C name={name}/>
    </div>
  
   
  )
}

export default Com_B

   