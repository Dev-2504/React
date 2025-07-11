import React, { useState } from 'react'

export default function Searching() {

    const [formdata, setFormData] = useState()
    const [data,setData] = useState([
        {name:"Dev"},
        {name:"Keval"},
        {name:"Brijesh"},
        {name:"Vivek"},
        {name:"Kiran"},
        {name:"Rahul"},
    ])

    const searchData = data.filter((e,i) => {
        return e.name.toLowerCase().includes(formdata)
    })
    
  return (
    <div>
        <input type="text" onChange={(e) => setFormData(e.target.value)}/>

        {
            searchData.map((e,i) => {
                return(
                    <ul key={i}>
                        <li>{e.name}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}
