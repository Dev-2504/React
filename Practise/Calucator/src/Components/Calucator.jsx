import React from 'react'
import { useState } from 'react'

export default function Calucator() {

    const [first,setFirst] = useState(0)
    const [second,setSecond] = useState(0)

    const [ans,setAns] = useState(0)




    const add = () => {
        setAns(first + second)
    }

    const subtraction = () => {
        setAns(first - second)
    }

    const mul = () => {
        setAns(first * second)
    }

    const div = () => {
        setAns(first / second)
    }



  return (
    <>
        <input type="number"  onChange={(e) => setFirst(Number(e.target.value))}/>
        <input type="number" onChange={(e) => setSecond(Number(e.target.value))}/>
        <button onClick={add}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>

        <h1>{ans}</h1>

    </>
  )
}
