import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Project from './Components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Project />
    </>
  )
}

export default App
