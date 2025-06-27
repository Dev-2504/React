import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen w-full flex flex-col lg:flex-row items-center py-4 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36'>
        <div className='w-full lg:w-1/2 h-64 lg:h-full mb-8 lg:mb-0 flex items-center justify-center bg-gray-100' id='left'>
          {/* You can add an image or illustration here if needed */}
        </div>
        <div className='w-full lg:w-1/2 h-full flex flex-col items-center justify-between'>
            <div className='mb-6'><img src="Logo.jpg" alt="Logo" className='h-14 md:h-20'/></div>
            <div className='w-full max-w-md'>
                <p className='text-2xl md:text-4xl font-semibold text-center' id='Heading_text'>Welcome Back</p>
                <p className='font-light text-center mt-2' id='Sub_Headint_text'>Enter your email and password to access your account</p>
                <div className='mt-8'>
                    <form action="" className='flex flex-col'>
                        <label htmlFor="email" className='text-sm md:text-base'>Email</label>
                        <input id="email" type="email" placeholder='Example@gmail.com' className='h-11 w-full bg-[#F5F7FA] rounded-md text-[15px] p-2.5 mt-2 border-none outline-none' />
                        <label htmlFor="password" className='mt-5 text-sm md:text-base'>Password</label>
                        <input id="password" type="password" placeholder='At least 8 characters' className='h-11 w-full bg-[#F5F7FA] rounded-md text-[15px] p-2.5 mt-2 border-none outline-none' />
                        <a href="#" className='text-end mt-5 text-blue-500 text-sm'>Forgot Password?</a>
                        <button className='h-11 w-full bg-black text-white rounded-md mt-5 transition hover:bg-gray-800'>Sign In</button>
                    </form>
                </div>
            </div>
            <div className='mt-8 text-center text-sm'>Don't have an account? <b className='text-blue-600 cursor-pointer'>Sign Up</b></div>
        </div>
    </div>
  )
}
