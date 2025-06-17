import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleClick = (e) => {
        e.preventDefault()

        // Regexes
        const nameRegex = /^[A-Za-z ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;

        // Validations
        if (!nameRegex.test(name)) {
            setError("Name should contain only letters")
            return
        }
        if (!emailRegex.test(email)) {
            setError("Invalid email format")
            return
        }
        if (!phoneRegex.test(phone)) {
            setError("Phone number must be 10 digits")
            return
        }
        if (!passwordRegex.test(password)) {
            setError("Password must have 1 capital letter, 1 number, and 1 special character")
            return
        }

        setError("") // Clear error if all okay
        alert("Form submitted successfully!")

        // Reset all fields
        setName("")
        setEmail("")
        setCountry("")
        setPhone("")
        setPassword("")
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center' id='form'>
            <div className='w-[25%] bg-white px-[50px] py-[30px]' id='form-abc'>
                <div className='w-full flex justify-center'>
                    <p className='text-2xl text-[#0064E6] font-bold'>Registration Form</p>
                </div>

                <form onSubmit={handleClick} className='w-full mt-[30px] text-center'>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='w-full py-[10px] border-css'/>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address' className='w-full py-[10px] mt-[20px] border-css'/>
                    <input required value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder='Country' className='w-full py-[10px] mt-[20px] border-css'/>
                    <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Phone' className='w-full py-[10px] mt-[20px] border-css'/>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='w-full py-[10px] mt-[20px] border-css'/>

                    {error && <p className='text-red-500 mt-2'>{error}</p>}

                    <button type='submit' className='w-[250px] h-[50px] rounded-full mt-[30px] bg-blue-500 text-white'>Create Account</button>
                </form>
            </div>
        </div>
    )
}
