import React from 'react'
import Com_B from './Com_B'

const Com_A = ({name}) => {
  return (
    <div>
       
        <h1>This is a Com_A</h1>
        <span className="bg-red-500">{name}</span>
        <Com_B name={name}/>
    </div>
  )
}

export default Com_A
 