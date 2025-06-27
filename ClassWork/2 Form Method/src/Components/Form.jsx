import React, { useState } from 'react'

export default function Form() {

    const [formdata,setFormdata] = useState({})

    const [arr,setArr] = useState([])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = () => {
        setArr([...arr, formdata])
    }


  return (
    <>
        <input type="text" name='name' placeholder='Name' onChange={handleChange}/>
        <input type="text" name='city' placeholder='City' onChange={handleChange}/>
        <input type="text" name='subject' placeholder='subject' onChange={handleChange}/>

        <button onClick={handleClick}>Click</button>


        {
            arr.map((e,i) => {
                return <ul>
                    <li>{e.name}</li>
                    <li>{e.city}</li>
                    <li>{e.subject}</li>
                </ul>
            })
        }
    </>
  )
}
