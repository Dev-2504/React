import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import ForgetPassword from './Components/ForgetPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignIn}>SignIn</Route>
          <Route path='/signup' Component={SignUp}>SignIn</Route>
          <Route path='/forgetpassword' Component={ForgetPassword}>SignIn</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
