import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Passwordchangesuccess() {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/")
    }
  return (
     <div className="w-full h-screen bg-[#686279] flex items-center" id="SignUp_Wrapper">
      <div className="w-[70%] h-[75%] flex mx-[auto] bg-[#2c2638] py-[15px] pl-[15px] rounded-2xl">
        {/* Left */}
        <div className="w-[50%]" id="SignUp_Image"></div>
        {/* Right */}
        <div className="w-[50%] px-[120px] py-[200px]">
          <p className="text-5xl text-white text-center">Password Changed</p>
          <p className="text-center mt-[15px] text-[#888]">Your password has been successfully reset</p>
          <p className="text-center mt-[2px] text-[#888]">Click below to login automatically</p>
            

          <form action="" className="">
            
           
            <button className="w-full h-[50px] mt-[40px] bg-[#6d54b7] cursor-pointer text-white text-[18px] rounded-md" onClick={handleClick}>Log In</button>
          </form>

          

            

            <p className="text-center text-white mt-[20px] font-extralight">Already have an account? <Link className='text-[#6d54b5] font-medium' to={"/signup"}>Sign Up?</Link></p>
        </div>
      </div>
    </div>
  )
}
