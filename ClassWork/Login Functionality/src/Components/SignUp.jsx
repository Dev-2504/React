import React from "react";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="w-full h-screen bg-[#686279] flex items-center" id="SignUp_Wrapper">
      <div className="w-[70%] h-[75%] flex mx-[auto] bg-[#2c2638] py-[15px] pl-[15px] rounded-2xl">
        {/* Left */}
        <div className="w-[50%]" id="SignUp_Image"></div>
        {/* Right */}
        <div className="w-[50%] px-[120px] py-[20px]">
          <p className="text-5xl text-white text-center">Create an account</p>
          <p className="text-center mt-[8px] text-[#888]">Sign up to unloack your personalized experience.</p>

          <form action="" className="mt-[40px]">
            <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="First Name" className="h-[50px] bg-[#3c364c] px-[15px] placeholder-[#77777] text-white rounded-md outline-none"/>
              <input type="text" placeholder="Last Name" className="h-[50px] bg-[#3c364c] px-[15px] placeholder-[#77777] text-white rounded-md outline-none"/>
            </div>
            <input type="text" placeholder="Email"  className="h-[50px] w-full mt-[20px] bg-[#3c364c] px-[15px] placeholder-[#77777] text-white rounded-md outline-none"/>
            <div className="h-[50px] rounded-md flex items-center justify-between bg-[#3c364c] px-[15px] mt-[20px]">
            <input type="password" placeholder="Enter your Password" className="w-[300px] placeholder-[#77777] text-white rounded-md outline-none"/>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path><path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path></g></svg>
            </div>
            <div className="mt-[20px] flex itmes-center">
            <input type="checkbox" className="h-[16px] w-[16px] mt-[5px]"/>
            <span className="ml-[10px] text-white">I agree to the <a href="" className="underline text-[#6d54b5]">Terms & Conditions</a></span>
            </div>
            <button className="w-full h-[50px] mt-[40px] bg-[#6d54b7] cursor-pointer text-white text-[18px] rounded-md">Create Account</button>
          </form>

            <div className="w-full mt-[25px] flex items-center justify-between">
                <div className="h-[1px] w-[35%] border border-[#888888]"></div>
                <div className="mx-[10px] w-[150px] text-center text-[#888888]">Or register with</div>
                <div className="h-[1px] w-[35%] border border-[#888888]"></div>
            </div>

           <div className="grid grid-cols-2 gap-3 mt-[25px]">
                <div className="h-[50px] border border-[#8888] cursor-pointer rounded-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path></svg>
                    <p className="text-[20px] ml-[15px] text-white">Google</p>
                </div>
                <div className="h-[50px] border border-[#8888] cursor-pointer rounded-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><path fill="#fff" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"></path></svg>
                    <p className="text-[20px] ml-[15px] text-white">Apple</p>
                </div>
            </div>

            <p className="text-center text-white mt-[20px] font-extralight">Already have an account? <Link className='text-[#6d54b5] font-medium' to={"/"}>Sign In?</Link></p>
        </div>
      </div>
    </div>
  );
}
