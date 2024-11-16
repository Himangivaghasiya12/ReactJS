import React from 'react'
import { useState , useEffect } from 'react'

const List2 = ({getNumber}) => {

  const [item  , setItem] = useState([])

  useEffect(() => {
    setItem(getNumber)
    console.log("List Components Called");
  }  , [getNumber])


  return (
    <div>
      <h1>This is List Componenets</h1>
      {
        item.map(item => <div key={item}>{item}</div>)
      }
    </div>
  )
}

export default List2
