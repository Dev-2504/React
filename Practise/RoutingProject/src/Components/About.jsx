import React from 'react'
import {useNavigate,useParams} from "react-router-dom"

export default function About() {
  const navigate = useNavigate()
  const id = useParams()
console.log(id);

  const handleClick = () => {
    navigate("/",{state:{name:"dev"},replace : true})
  }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  )
}
