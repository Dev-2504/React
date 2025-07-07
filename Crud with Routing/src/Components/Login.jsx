import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const [formdata, setFormdata] = useState([])
    localStorage.setItem('auth',JSON.stringify(false))
    const navigate = useNavigate()


    function handlechange(e) {
        setFormdata({
            id:Date.now(),
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleclick = () => {
        const data = JSON.parse(localStorage.getItem("user")) || []
        const singledata = data.find((e,i) => e.email == formdata.email)

        if(singledata.password == formdata.password)
             {
                localStorage.setItem('auth',JSON.stringify(true))
                navigate('/dashboard',)
             }
             else {
                alert('password is incorrect')
             }
    }



  return (
    <div>
      <h1>Login</h1>

      <input type="text" name='email' placeholder='Enter Your Email' onChange={handlechange}/>
      <input type="text" name='password' placeholder='Enter Your Password' onChange={handlechange}/>
      <button onClick={handleclick}>Login</button>
    <br /><br /><br />
      <Link to={'/register'}>Register</Link>
    </div>
  )
}
