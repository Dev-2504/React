import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import Otp from './Otp';
import { toast } from 'react-toastify';

export default function ForgetPassword() {

  const [formdata, setFormData] = useState([])
  const [passwordshow, setPasswordshow] = useState(false);
  // Otp
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpvalue, setOtpValue] = useState()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const record = JSON.parse(localStorage.getItem("user")) || []
    const data = record.find((e,i) => e.email == formdata.email)
    console.log("Data : ", data)

    if(data && Object.keys(data).length > 0)
    {
      console.log("Otp Send")
      const otpgenerator = Math.floor(100000 + Math.random() * 900000);
      setOtpValue(otpgenerator)
      const notify = toast.info(`Otp is : ${otpgenerator}`)
    }
    else {
      console.log("Email Not Exist Plese SignUp")
      const notify = toast.error("Email Not Exist Plese SignUp")
    }
  }

  console.log("Otp :",otpvalue)
  const verify = (e) => {
    e.preventDefault()
     const record = JSON.parse(localStorage.getItem("user")) || []
    const data = record.find((e,i) => e.email == formdata.email)
    // Otp
    const otpValuedata = parseInt(otp.join("")); // Example: "324791"
    console.log(otpValuedata)

    if(otpvalue == otpValuedata)
    {
      const notify = toast.success("Otp value Matched")
      navigate("/newpassword",{state:{passworduser : data}})

    }
    else {
      const notify = toast.error("Otp Incorrect.")
    }
    
  }



    // const handleClick = (e) => {
      // e.preventDefault()
      // navigate("/newpassword")
    // }

  return (
    <div className="w-full h-screen bg-[#686279] flex items-center" id="SignUp_Wrapper">
      <div className="w-[70%] h-[75%] flex mx-[auto] bg-[#2c2638] py-[15px] pl-[15px] rounded-2xl">
        {/* Left */}
        <div className="w-[50%]" id="SignUp_Image"></div>
        {/* Right */}
        <div className="w-[50%] px-[120px] py-[120px]">
          <p className="text-5xl text-white text-center">Forgot Password</p>
          <p className="text-center mt-[8px] text-[#888]">No worried. we 'ii send you reset instructions</p>
            

          <form action="" onSubmit={verify} className="mt-[40px]">
            <div className='h-[50px] flex itmems-center justify-between pl-[15px] rounded-md w-full bg-[#3c364c]'>
            <input onChange={handleChange} autoComplete='off' name='email' value={formdata.email} type="text" placeholder="Email"  className="placeholder-[#77777] text-white outline-none w-[300px]"/>
            <button onClick={handleSubmit} type='submit' className='h-full w-[100px] text-white rounded-md bg-[#6d54b7]'>Get Otp</button>
            </div>

            {/* <p className='text-center mt-[15px] text-white'>Enter a Varification Code</p> */}
            <Otp otp={otp} setOtp={setOtp}/>
            
            <button type='submit' className="w-full h-[50px] mt-[40px] bg-[#6d54b7] cursor-pointer text-white text-[18px] rounded-md" >Verify</button>
          </form>

          

            

            <p className="text-center text-white mt-[20px] font-extralight">Already have an account? <Link className='text-[#6d54b5] font-medium' to={"/signup"}>Sign Up?</Link></p>
        </div>
      </div>
    </div>
  )
}
