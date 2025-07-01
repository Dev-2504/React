import { useState } from 'react'
import './App.css'
import CRUD from './CRUD'
import SecondTime from './SecondTime'
import ThirdTime from './ThirdTime'
import FourTime from './FourTime'
import FiveTime from './FiveTime'
import LocalStorage from './LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CRUD /> */}
      {/* <SecondTime /> */}
      {/* <ThirdTime /> */}
      {/* <FourTime /> */}
      {/* <FiveTime /> */}
      <LocalStorage />
    </>
  )
}

export default App
