import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import ForgetPassword from './Components/ForgetPassword'
import NewPassword from './Components/NewPassword'
import Passwordchangesuccess from './Passwordchangesuccess'
import { Bounce, ToastContainer } from 'react-toastify'
import Dashboard from './Components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignIn}>SignIn</Route>
          <Route path='/signup' Component={SignUp}>SignIn</Route>
          <Route path='/forgetpassword' Component={ForgetPassword}>SignIn</Route>
          <Route path='/newpassword' Component={NewPassword}>SignIn</Route>
          <Route path='/passwordchagesuccess' Component={Passwordchangesuccess}>SignIn</Route>
          <Route path='/dashboard' Component={Dashboard}>SignIn</Route>
        </Routes>
        
      </BrowserRouter>

       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}

export default App