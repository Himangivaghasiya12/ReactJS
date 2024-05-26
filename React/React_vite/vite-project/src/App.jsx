import { useState } from 'react'

import './App.css'
import Example from './Componetes/P_1'
import PackingList from './Componetes/P_1'
import DrinkList from './Componetes/P_1'
import TaskList from './Componetes/Rendering_list_1'
import NestedList from './Componetes/Rendering_list_1'
import Form from './Componetes/P_2'
import NumberCounter from './Componetes/P_2'
import Com_A from './Componetes/Com_A'
import { createContext } from 'react'



const data = createContext()

function App() {

  return (
     <>
    
      {/* <PackingList/> */}
      {/* <DrinkList/> */}

      {/* <PackingList/> */}
      {/* <NestedList/> */}
      {/* <Form/> */}
      {/* <NumberCounter/> */}
      <Com_A name="React_js"/>
      </>


   
  )
}

export default App
