import React from 'react'

export default function Sidebar({isCollapsed}) {
  return (
    <div className={`h-full ${(isCollapsed) ? 'w-[70px]' : 'w-[300px]'} transition-all duration-300`}></div>
  )
}
