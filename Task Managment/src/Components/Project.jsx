import React, { useState } from 'react'

export default function Project() {

    const [formData, setFormData] = useState([])
    const [record, setRecord] = useState([])

    // const [status, setStatus] = useState("Pending")

    const handleChange = (e) => {
        setFormData({
            id:Date.now(),
            ...formData,
            [e.target.name] : e.target.value,
            status : "Pending"
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setRecord([...record, formData])

        setFormData({
            task:""
        })
    }

    const handleDelete = (id) => {
        const newData = record.filter((e,i) => id != e.id)
        setRecord(newData)
    }

    const handleEdit = (id) => {
        console.log("Hello")
        const newData = record.map((e,i) => {
            if(id == e.id)
            {
                return {
                    ...e,
                    status : "Resolve"
                }
            }
            else {
                return e
            }
        })

        setRecord(newData)
    }
    
  return (
    <div className=''>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='task' value={formData.task} placeholder='Enter Your Task' onChange={handleChange}/>
        <button type='submit'>Create Task</button>
      </form>

      {
        record.map((e,i) => {
            return(
                <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.task}</li>
                    <li>{e.status}</li>
                    <button disabled={e.status == "Resolve"} onClick={() => handleEdit(e.id)}>Resolve</button>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                </ul>
            )
        })
      }
    </div>
  )
}