import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const navigate = useNavigate()

    useEffect(() => {
        const authdata = JSON.parse(localStorage.getItem("auth"))
        console.log(authdata)
        if(authdata == false)
        {
            navigate("/")
        }
    },[])
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
