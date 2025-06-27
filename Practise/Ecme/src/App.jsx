import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Right from './Components/Right'

function App() {


  const [isCollapsed,setIsCollapsed] = useState(false)

  return (
    <div className='h-screen w-full flex'>
      <Sidebar isCollapsed={isCollapsed}/>
      <Right setIsCollapsed={setIsCollapsed}/>
    </div>
  )
}

export default App
