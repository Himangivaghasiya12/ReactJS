import React from 'react'
import Com_B from './Com_B'

const Com_A = (props) => {
  return (
    <div>
      <h1>A Institute Of {props.name}</h1>
      <Com_B name={props.name}/>
    </div>
  )
}

export default Com_A
