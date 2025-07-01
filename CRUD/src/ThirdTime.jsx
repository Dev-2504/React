import React, { useState } from 'react'

export default function ThirdTime() {

    const [formData, setFormData] = useState([])
    const [record, setRecord] = useState([])

    const [editIndex, setEditIndex] = useState(null)

    const handleChange = (e) => {
        setFormData({
            id:Date.now(),
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setRecord([
            ...record,
            formData
        ])

        setFormData(
            {
                name : "",
                subject : "",
                city : ""
            }
        )
    }

    const handleDelete = (id) => {
        const newData = record.filter((e,i) => e.id != id)
        setRecord(newData)
    }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' value={formData.name} placeholder='Enter your Name' onChange={handleChange}/>
        <input type="text" name='subject' value={formData.subject} placeholder='Enter your subject' onChange={handleChange}/>
        <input type="text" name='city' value={formData.city} placeholder='Enter your City' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>

      {
        record.map((e,i) => {
            return(
                <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                    <li>{e.city}</li>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                </ul>
            )
        })
      }
    </div>
  )
}
