import { useState } from 'react'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (  
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about/:id' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
