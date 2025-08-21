import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Crud() {
    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        getData()
    },[])

    const getData = async() => {
        await axios.get("http://localhost:3000/data").then((res) => {
            setRecord(res.data)
        })
    }

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(editIndex == null)
        {
            await axios.post("http://localhost:3000/data",formdata).then((res) => {
                setRecord([...record, res.data])
            })
        }
        else {

            await axios.put(`http://localhost:3000/data/${editIndex}`,formdata).then((res) => {
                const newData = record.find((e,i) => e.id == editIndex)
                
                newData.name = formdata.name
                newData.subject = formdata.subject
                newData.city = formdata.city
            })
            
        }

        setFormdata({
            name : "",
            subject : "",
            city : "",
        })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/data/${id}`).then((res) => {
            const newData = record.filter((e,i) => e.id != id)
            setRecord(newData)
        })
    }

    const handleEdit = (id) => {
        const newData = record.find((e,i) => e.id == id)
        setFormdata({
            name : newData.name,
            subject : newData.subject,
            city : newData.city,
        })
        setEditIndex(newData.id)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={formdata.name} name='name' onChange={handleChange} placeholder='Enter your Name'/>
        <input type="text" value={formdata.subject} name='subject' onChange={handleChange} placeholder='Enter your Subject'/>
        <input type="text" value={formdata.city} name='city' onChange={handleChange} placeholder='Enter your City'/>
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
