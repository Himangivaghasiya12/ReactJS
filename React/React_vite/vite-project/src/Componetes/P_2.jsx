import React from 'react'
import { useState } from 'react';




// const NumberCounter=()=> {
//     const [count, setCount] = useState(0);
  
//     const handleIncrement = () => {
//       setCount(count + 1);
//     };
  
//     const handleDecrement = () => {
//       if (count > 0) {
//         setCount(count - 1);
//       }
//     };
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button className='button1 h-12 w-12 bg-purple-400' onClick={handleIncrement}>+</button>
//         <button className='button1 h-12 w-12 bg-purple-400' onClick={handleDecrement} disabled={count === 0}>-</button>
//       </div>
//     );
//   }
  
//   export default NumberCounter

export default function Form() {
    const [name, setName] = useState('John');
    const [age, setAge] = useState(20);
   
    return (
      <>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button  onClick={() => setAge(age + 1)}>
          Increment age
        </button>
        <p>Hello, {name}. You are {age}.</p>
      </>
    );
  }