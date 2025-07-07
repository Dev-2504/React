import React from 'react'
import { useEffect } from 'react'
import { use } from 'react'
import { useState } from 'react'

export default function Crud() {

    const [formdata,setFormdata] = useState([[]])
    const [record, setRecord] = useState([])

    const [editindex, setEditindex] = useState(null)


    useEffect(() => {
        const getdata = JSON.parse(localStorage.getItem('students')) || []
        setRecord(getdata)
    },[])

    const handleChange = (e) => {
        setFormdata({
            id : Date.now(),
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editindex == null)
        {
            setRecord([...record,formdata])
            localStorage.setItem('students',JSON.stringify([...record,formdata]))
        }
        else {
            const newData = record.find((e,i) => editindex == e.id)
                newData.name = formdata.name,
                newData.subject = formdata.subject,
                newData.city = formdata.city,
            localStorage.setItem('students',JSON.stringify([record]))
        }   


        setFormdata({
            name : "",
            subject : "",
            city : "",
        })
    }

    const handleDelete = (id) => {
        const newData = record.filter((e,i) => e.id != id)
        setRecord(newData)

        localStorage.setItem('students',JSON.stringify(newData))
    }

    const handleEdit = (id) => {
        const newData = record.find((e,i) => e.id == id)
        setFormdata({
            name: newData.name,
            subject: newData.subject,
            city: newData.city
        })
        setEditindex(newData.id)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={formdata.name} name='name' onChange={handleChange} placeholder='Enter your name' />
        <input type="text" value={formdata.subject} name='subject' onChange={handleChange} placeholder='Enter your subject' />
        <input type="text" value={formdata.city} name='city' onChange={handleChange} placeholder='Enter your city' />
        <button type='submit'>Submit</button>
      </form>


     {
        record.map((e,i) => {
            return(
                <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                    <li>{e.city}</li>
                    <button onClick={() => handleEdit(e.id)}>Edit</button>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                </ul>
            )
        })
     } 
    </div>
  )
}
