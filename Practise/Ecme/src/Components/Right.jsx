import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Right({setIsCollapsed}) {
  return (
    <div className='h-full flex-1'>
        <Header setIsCollapsed={setIsCollapsed}/>
        <Content />
    </div>
  )
}
