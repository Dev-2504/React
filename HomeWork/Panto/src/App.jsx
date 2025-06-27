import { useState } from 'react'
import './App2.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Why_Chosing from './Components/Why_Chosing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <Header />
      {/* <Hero /> */}
      <Hero2 />
      <Why_Chosing />
    </div>
  )
}

export default App
