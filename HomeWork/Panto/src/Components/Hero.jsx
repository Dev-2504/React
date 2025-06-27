import React from 'react'

export default function Hero() {
  return (
    <div id='Hero' className='flex justify-center max-sm:px-[16px]'>
        <div id='Hero_Text' className='max-sm:p-[10px] p-[20px]'>
        <p className='text-white max-sm:text-[25px] text-[52px] text-center font-semibold'>Make Your Interior More</p>
        <p className='text-white max-sm:text-[25px] max-sm:mt-[0]  text-[52px] text-center font-semibold mt-[-15px]'>Minimalistic & Modern</p>
        <p className='text-white max-sm:text-[12px] text-[16px] font-light text-center mt-[20px]'>Turn your room with panto into a lot more minimalis</p>
        <p className='text-white max-sm:text-[12px] text-[16px] font-light text-center'>and modern with ease and speed.</p>
        <div id='search' className='w-[350px] max-sm:w-full mx-auto mt-[30px] flex items-center justify-between rounded-full px-[5px] py-[5px]'>
            <input type="text" placeholder='Search Furniture' className='ml-[10px] h-[30px] w-[275px] max-sm:w-[200px] outline-0 text-white'/>
            <div className='h-[40px] w-[40px] rounded-full bg-[#E58411] flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="m21 21l-4.34-4.34"></path><circle cx={11} cy={11} r={8}></circle></g></svg>
            </div>
        </div>
        </div>
    </div>
  )
}
