import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
