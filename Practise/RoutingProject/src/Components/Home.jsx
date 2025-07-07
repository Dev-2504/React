import React from 'react'
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

export default function Home() {

  const location = useLocation()

  console.log(location);
  

  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/about/6"}>Go to Aboutpage</Link>
    </div>
  )
}
    