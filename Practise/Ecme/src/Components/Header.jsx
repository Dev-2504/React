import React from 'react'
import { useState } from 'react'

export default function Header({setIsCollapsed}) {

    const [color,setColor] = useState('#ff0000')

    console.log(color)

    const handleClick = () => {
        setIsCollapsed(prev => !prev)
    }

  return (
    <div className='h-[65px] w-full sticky top-0 left-0'>
      <button className='text-[20px] font-bold p-[10px] m-[5px]' onClick={handleClick}>=</button>
      {/* <input type="color" onChange={(e) => setColor(e.target.value)}/> */}
      <input type="color" value={"#bd2f1c"} disabled/>
      <input type="color" value={"#0c701f"} disabled/>
      <input type="color" value={"#0c138a"} disabled/>
      <input type="" value={"#a815ad"} disabled/>
    </div>
  ) 
}
