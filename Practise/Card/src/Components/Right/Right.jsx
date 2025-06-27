import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Right() {
  return (
    <div className='h-full w-auto absolute top-0 left-[270px] bg-amber-600 overflow-auto'>
      <Header />
      <Content />
    </div>
  )
}
