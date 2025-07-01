import React, { useState } from 'react'

export default function CRUD() {

        const [formData, setFormData] = useState({})
        const [record, setRecord] = useState([])


        // Edit

        const [editIndex,setEditIndex] = useState(null)

        const handleChange = (e) => {
            setFormData({
                id:Date.now(),
                ...formData,
                [e.target.name] : e.target.value
            })
        }


        const handleSubmit = (e) => {
            e.preventDefault()
            if (editIndex == null)
            {
                setRecord([...record, formData])
            }
            else {
                let singleData = record.find((e) => e.id == editIndex)
                singleData.name = formData.name
                singleData.subject = formData.subject
                singleData.city = formData.city
            }
            setEditIndex(null)
            setFormData({
                name:"",
                subject:"",
                city:""
            })
        }



        const handleDelete = (id) => {
            console.log(id)
            const newData = record.filter((e,i) => e.id != id)
            setRecord(newData)
        }

        const handleEdit = (id) => {
            let singleData = record.find((e) => e.id == id)
            setFormData({
                name:singleData.name,
                subject:singleData.subject,
                city:singleData.city,
            })
            setEditIndex(id)
        }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={formData.name} name='name' placeholder='Enter Your Name' onChange={handleChange}/>
        <input type="text" value={formData.subject} name='subject' placeholder='Enter Your Subject' onChange={handleChange}/>
        <input type="text" value={formData.city} name='city' placeholder='Enter your City' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>

      {record.map((e,i) => {
        return(
            <ul key={i}>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <li>{e.city}</li>
                <button onClick={() => handleEdit(e.id)}>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
            </ul>
        )
      })}
    </div>
  )
}
