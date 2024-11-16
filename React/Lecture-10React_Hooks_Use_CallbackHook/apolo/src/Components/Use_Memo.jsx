import React from 'react'
import List2 from './List2'
import { useState , useMemo } from 'react'

const Use_Memo = () => {

  const [number , setNumber] = useState(1)
  const [dark , setDark]  = useState(false)

  const getNumber = useMemo(
    () =>{
      return [number , number + 1  , number + 2]
    } , [number]) 
  

  const theme = {
    backgroundColor:dark ? "#333" : "#fff",
    color:dark ? "#fff" : "#333"
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Theme</button>
      <List2 getNumber={getNumber}/>
    </div>
  )
}

export default Use_Memo
