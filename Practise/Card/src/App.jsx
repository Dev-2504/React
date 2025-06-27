import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Right from './Components/Right/Right'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full relative flex'>
      <Sidebar />
      <Right />
    </div>
  )
}

export default App
