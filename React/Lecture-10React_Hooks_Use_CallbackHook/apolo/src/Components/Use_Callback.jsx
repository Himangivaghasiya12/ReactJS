import React from 'react'
import List from './List'
import { useState , useCallback } from 'react'

const Use_Callback = () => {

  const [number , setNumber] = useState(1)
  const [dark , setDark]  = useState(false)

  const getNumber = useCallback(
    (num) =>{
      return [number + num , number + 1 + num  , number + 2 + num]
    } , [number]) 
  

  const theme = {
    backgroundColor:dark ? "#333" : "#fff",
    color:dark ? "#fff" : "#333"
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Theme</button>
      <List getNumber={getNumber}/>
    </div>
  )
}

export default Use_Callback
