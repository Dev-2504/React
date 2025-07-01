import React, { useEffect, useState } from 'react'

export default function FiveTime() {

    const [formData, setFormData] = useState([])
    const [record, setRecord] = useState([])

    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let alldata = JSON.parse(localStorage.getItem("student")) || []
        setRecord(alldata)
    },[])

    const handleChange = (e) => {
        setFormData({
            id:Date.now(),
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(editIndex == null)
        {
            setRecord([...record,formData])
            localStorage.setItem("student",JSON.stringify([...record, formData]))
        }
        else {
            const OneData = record.find((e,i) => e.id == editIndex)
            OneData.name = formData.name
            OneData.subject = formData.subject
            OneData.city = formData.city
            localStorage.setItem("student",JSON.stringify(record))
        }

        setFormData({
            name : "",
            subject : "",
            city : ""
        })
    }

    const handleDelete = (id) => {
        const newData = record.filter((e,i) => id != e.id)
        setRecord(newData)
        localStorage.setItem("student",JSON.stringify(newData))
    }

    const handleEdit = (id) => {
        const oneData = record.find((e,i) => e.id == id)
        console.log(oneData)
        setFormData({
            name:oneData.name,
            subject:oneData.subject,
            city:oneData.city,
        })
        setEditIndex(id)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' value={formData.name} placeholder='Enter Your Name' onChange={handleChange}/>
        <input type="text" name='subject' value={formData.subject} placeholder='Enter Your Subject' onChange={handleChange}/>
        <input type="text" name='city' value={formData.city} placeholder='Enter Your City' onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>

<table border={"1px"} width={"80%"}>
<tbody>

      {
          record.map((e,i) => {
              return(
                  <tr key={i}>

                    <td>{e.name}</td>
                    <td>{e.subject}</td>
                    <td>{e.city}</td>
                    <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                    <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                </tr>
            )
        })
    }
    </tbody>
    </table>
    </div>
  )
}