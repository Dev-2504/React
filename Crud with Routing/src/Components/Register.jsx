import React, { useInsertionEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"

export default function Register() {

    const [formdata, setFormdata] = useState([])
    const navigate = useNavigate()

    function handlechange(e) {
        setFormdata({
            id:Date.now(),
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    function hanldecreate() {
        const oldData = JSON.parse(localStorage.getItem("user")) || []
        localStorage.setItem("user",JSON.stringify([...oldData, formdata]))
        navigate("/")
    }


  return (
    <div>
      <h1>Register</h1>

      <input type="text" name='name' placeholder='Enter Your Name' onChange={handlechange} />
      <input type="text" name='email' placeholder='Enter Your Email' onChange={handlechange}/>
      <input type="text" name='password' placeholder='Create Your Password' onChange={handlechange}/>
      <button onClick={hanldecreate}>Crete Account</button>
    </div>
  )
}
