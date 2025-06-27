import React from 'react'

export default function Header() {
  return (
        <div className='w-full h-[60px] sticky top-0 lef-0 px-[100px] max-lg:px-[16px] bg-[#2b3136] flex items-center z-20'>
            <div className='w-full max-w-[1500px] flex items-center justify-between mx-auto'>
                <p className='text-[20px] font-semibold text-white'>Panto</p>
                <div className='w-[600px] max-md:hidden flex items-center justify-evenly text-white'>
                    <p className='text-[15px] font-medium'>Furtinure</p>
                    <p className='text-[15px] font-medium'>Shop</p>
                    <p className='text-[15px] font-medium'>About Us</p>
                    <p className='text-[15px] font-medium'>Contact</p>
                </div>
                <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#fff" fillRule="evenodd" d="M8.25 7.002V6a3.75 3.75 0 1 1 7.5 0v1.002c2.684.012 4.11.12 4.91 1.096c.9 1.098.569 2.758-.095 6.079l-.6 3c-.462 2.309-.693 3.463-1.523 4.143c-.829.68-2.006.68-4.36.68H9.918c-2.355 0-3.532 0-4.362-.68c-.829-.68-1.06-1.834-1.522-4.143l-.6-3c-.664-3.32-.996-4.98-.096-6.079c.8-.976 2.227-1.084 4.911-1.096M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clipRule="evenodd"></path></svg>
                <svg className='ml-[20px] max-md:block   hidden' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#fff" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>
                </div>
            </div>
        </div>
  )
}
