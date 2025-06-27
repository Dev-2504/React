import React from 'react'

export default function Header() {
  return (
    <>
        <div className='h-[60px] overflow-x-hidden overflow-y w-screen flex items-center justify-center bg-[#354e33] sticky top-0 left-0 px-[12px] sm:px-[20px] md:px-[20px] lg:px-[20px] xl:px-[100px] border'>
            <div className='w-full max-w-[1500px] flex items-center justify-between border'>
                <div className='h-[34px] w-[160px]'>
                    <img src="logo-white.png" alt="" />
                </div>
                <div className=' w-[600px] xl:w-[700px] hidden lg:flex items-center justify-evenly text-white border border-white'>
                    <a href="">HOME</a>
                    <a href="">SERVICES</a>
                    <a href="">PROJECTS</a>
                    <a href="">PAGES</a>
                    <a href="">SHOP</a>
                    <a href="">BLOG</a>
                    <a href="">CONTACT</a>
                </div>
                <div className='flex items-center justify-center'>
                    <div className="h-[40px] w-[150px] border border-white rounded-full flex items-center justify-center text-white font-normal">GET IT TOUCH</div>
                    <svg className='ml-[15px] lg:block hidden' xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"></path></svg>
                    <svg className='ml-[15px] lg:hidden block' xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </div>
        </div>
    </>
  )
}
