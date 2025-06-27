import React from 'react'

export default function Hero2() {
  return (
    <div className='flex flex-row max-md:flex-col relative'>
        <div className='w-full order-1 max-md:order-2'>
            <img src="Hero_Background(1).png" alt="" width={'100%'} />
        </div>
        <div className='max-md:px-[16px] max-md:py-[10px]' id='Hero_Text_Two'>
        <div className='order-2 max-md:order-1 absolute top-[10px] left-1/2 transform -translate-x-1/2 max-md:static max-md:translate-x-0' id='Hero_Text'>
            <p className='text-white max-sm:text-[25px] max-lg:text-[30px] max-xl:text-[40px] max-2xl:text-[50px] text-[50px] text-center font-semibold'>Make Your Interior More</p>
            <p className='text-white max-sm:text-[25px] max-lg:text-[30px] max-xl:text-[40px] max-2xl:text-[50px] text-[50px] text-center font-semibold mt-[-15px]'>Minimalistic & Modern</p>
            <p className='text-white max-sm:text-[12px] max-lg:text-[14px] max-xl:text-[15px] max-2xl:text-[16px] text-[16px] font-light text-center mt-[20px]'>Turn your room with panto into a lot more minimalis</p>
            <p className='text-white max-sm:text-[12px] max-lg:text-[14px] max-xl:text-[15px] max-2xl:text-[16px] text-[16px] font-light text-center'>and modern with ease and speed.</p>
            <div id='search' className='w-full max-w-[350px] mx-auto mt-[30px] flex items-center justify-between rounded-full px-[5px] py-[5px]'>
            <input type="text" placeholder='Search Furniture' className='ml-[10px] h-[30px] w-[275px] max-md:w-[200px] outline-0 text-white'/>
            <div className='h-[40px] w-[40px] rounded-full bg-[#E58411] flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="m21 21l-4.34-4.34"></path><circle cx={11} cy={11} r={8}></circle></g></svg>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
