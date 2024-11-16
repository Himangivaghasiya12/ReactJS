import React from 'react'
import { useState } from 'react'


const Use_State_Form_Data = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    console.log(`${name},${email}`);
  }


  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">submit</button>
      </form>
      </div>
      )
}

      export default Use_State_Form_Data
