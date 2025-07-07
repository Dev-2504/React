import React, { useState } from 'react'
import Otp from './Otp'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function NewPassword() {

  const [formdata, setFormData] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
   const [passwordshow1, setPasswordshow1] = useState(false);
   const [passwordshow2, setPasswordshow2] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }



    const handleClick = (e) => {
        e.preventDefault()

        const record = JSON.parse(localStorage.getItem("user")) || []

        console.log(location.state.passworduser)

        if(formdata.new_Password == formdata.new_Password_repeat)
        {
          const data = record.find((e,i) => location.state.passworduser.id == e.id)
          data.password = formdata.new_Password

          localStorage.setItem("user",JSON.stringify([...record]))
          navigate("/passwordchagesuccess")
          console.log("Data : ", data)
        }
        else {
            const notify = toast.error("New and confirm password do not match")
        }


        // navigate("/passwordchagesuccess")
    }
  return (
    <div className="w-full h-screen bg-[#686279] flex items-center" id="SignUp_Wrapper">
      <div className="w-[70%] h-[75%] flex mx-[auto] bg-[#2c2638] py-[15px] pl-[15px] rounded-2xl">
        {/* Left */}
        <div className="w-[50%]" id="SignUp_Image"></div>
        {/* Right */}
        <div className="w-[50%] px-[120px] py-[120px]">
          <p className="text-5xl text-white text-center">Set New Password</p>
          <p className="text-center mt-[8px] text-[#888]">Must be at least 8 characters.</p>
            

          <form action="" className="mt-[40px]">
            
            <div className="h-[50px] mb-[10px] rounded-md flex items-center justify-between bg-[#3c364c] px-[15px] mt-[20px]">
            <input type={passwordshow1 ? "text" : "password"} name='new_Password' onChange={handleChange} placeholder="Set New Password" className="w-[350px] placeholder-[#77777] text-white rounded-md outline-none"/>
            <svg onClick={() => setPasswordshow1(!passwordshow1)} className='cursor-poinater' xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path><path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path></g></svg>
            </div>
            <div className="h-[50px] mb-[10px] rounded-md flex items-center justify-between bg-[#3c364c] px-[15px] mt-[20px]">
            <input type={passwordshow2 ? "text" : "password"} name='new_Password_repeat' onChange={handleChange} placeholder="Confirm Password" className="w-[350px] placeholder-[#77777] text-white rounded-md outline-none"/>
            <svg onClick={() => setPasswordshow2(!passwordshow2)} className='cursor-poinater' xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path><path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path></g></svg>
            </div>
            <button className="w-full h-[50px] mt-[40px] bg-[#6d54b7] cursor-pointer text-white text-[18px] rounded-md" onClick={handleClick}>Confirm</button>
          </form>

          

            

            <p className="text-center text-white mt-[20px] font-extralight">Already have an account? <Link className='text-[#6d54b5] font-medium' to={"/signup"}>Sign Up?</Link></p>
        </div>
      </div>
    </div>
  )
}
