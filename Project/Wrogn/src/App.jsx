import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import Slider from './Components/Slider'
import Two from './Components/Two'
import Three from './Components/Three'
import Second_Slider from './Components/Second_Slider'

function App() {
  const [count, setCount] = useState(0)

  let width = window.innerWidth
  console.log(width)

  return (
    <>
      {/* <Header />   */}
      <Header2 />  
      <Slider />
      <Two />
      <Three />
      <Second_Slider />
    </>
  )
}

export default App
