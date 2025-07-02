import React, { useState } from 'react'

export default function Project() {

    const [formData, setFormData] = useState([])
    const [record, setRecord] = useState([])

    const [editIndex, setEditIndex] = useState(null)

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

        if(editIndex == null)
        {
            setRecord([...record, formData])
        }
        else {
            const newData = record.find((e,i) => e.id == editIndex)
                newData.task = formData.task
        }

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


    const Edit = (id) => {
        const newData = record.find((e,i) => e.id == id)
        setFormData({
            task : newData.task
        })
        setEditIndex(newData.id)
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
                    <button onClick={() => Edit(e.id)}>Edit</button>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                </ul>
            )
        })
      }
    </div>
  )
}