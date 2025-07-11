import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Searching from './Components/Searching'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searching />
    </>
  )
}

export default App
