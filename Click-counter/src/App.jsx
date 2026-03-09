import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const inc = () => {
    setNum(num+1)
  }
  const dec = () => {
    setNum(num-1)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className="counter h-50 w-50 border bg-gray-200 flex items-center justify-center text-4xl" >{num}</div>
      <div className='flex items-center gap-2.5'>
        <button className='border bg-gray-200 px-4 py-1 cursor-pointer' onClick={inc}>increase</button>
        <button className='border bg-gray-200 px-4 py-1 cursor-pointer' onClick={dec}>Decrease</button>
      </div>
    </div>
  )
}

export default App