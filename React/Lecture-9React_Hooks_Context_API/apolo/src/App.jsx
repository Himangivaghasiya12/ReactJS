import './App.css'
import Com_A from './components/Com_A'
// import Com_A from './Components/Com_A'
import { createContext } from 'react'

const data = createContext()

const name = 'SkillQode'
const data1 = createContext()


/* contextAPI :- createContext  , Provider   ,Consumer */

function App() {

  const name = "Kishor"
  const Age = 50

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={Age}>
          <Com_A />
        </data1.Provider>
      </data.Provider>
    </>
  )
}

export default App

export { data }
export { data , data1 }
