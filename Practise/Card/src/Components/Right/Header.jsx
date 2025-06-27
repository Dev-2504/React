import React from 'react'

export default function Header() {

  const handleClick = () => {
    console.log("Hello")
  }


  return (
    <div className='h-[60px] w-auto sticky top-0 bg-blue-900'>
      <button className='ml-[10px] mt-[5px] px-[20px] py-[10px] border border-amber-50 text-white' onClick={handleClick}>Click</button>
    </div>
  )
}
