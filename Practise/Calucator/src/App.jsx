import { useState } from 'react'
import Calucator from './Components/Calucator'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calucator />
    </>
  )
}

export default App
