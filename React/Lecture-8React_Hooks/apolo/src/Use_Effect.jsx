import React from 'react'
import { useEffect, useState } from 'react'


const Use_Effect = () => {

  const [count, setcount] = useState(0)
  const [count1, setcount1] = useState(0)

  async function ProductDataList() {
    const response = await fetch('http://localhost:3000/0')
    const Data = await response.json()
    console.log(Data);
  }

  useEffect(() => {
    ProductDataList()
  })

  function Multi() {
    return count * 10
  }


  return (
    <div>
      <h1 className="text-center bg-green-600 text-4xl p-4">React useEffect Hook</h1>
      <span className='btn'>
        {Multi}
      </span>
      <span className='btn'>{count}</span>
      <span className='btn'>{count1}</span>
      <button className='btn' onClick={() => setcount(count + 1)}>Increment</button>
      <button className='btn' onClick={() => setcount1(count1 + 1)}>Count1</button>
    </div>
  )
}

export default Use_Effect
