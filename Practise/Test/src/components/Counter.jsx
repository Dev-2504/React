import React, { useState } from 'react'

export default function Counter() {

     const [num,setNum] = useState(0)

  return (
    <>
        <div>
            <h1>{num}</h1>
             <button onClick={() => setNum(num + 1)}>+</button>
             <button onClick={() => setNum(0)}>Reset</button>
             <button onClick={() => setNum(num - 1)}>-</button>
        </div>
    </>
  )
}
