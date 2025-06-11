import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  const [bool, setBool] = useState(true)



  return (
    <>
    <div id='hid' className='absolute top-0 left-0 h-[100%] w-[100%] bg-black z-10 opacity-80 hidden'></div>
    <div className='h-screen w-full overflow-hidden relative'>
      <Header />
      <Card />
    </div>
    </>
  )
}

export default App
