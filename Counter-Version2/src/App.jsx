import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)
  return (
    <div className='flex flex-col gap-5'>
      <div className='h-50 w-50 border rounded-2xl bg-gray-500 flex items-center justify-center font-medium text-5xl'>{value}</div>
      <div className='flex gap-2.5'>
        <button className='px-2.5 py-px rounded border bg-gray-400 active:scale-98 hover:bg-gray-300'
        onClick={() => {
          setValue(value+1)
        }}>+1</button>
        <button className='px-2.5 py-px rounded border bg-gray-400 active:scale-98 hover:bg-gray-300' 
        onClick={() => {
          if(value>0) {
            setValue(value-1)
          }
        }}>-1</button>
        <button className='px-2.5 py-px rounded border bg-gray-400 active:scale-98 hover:bg-gray-300' 
        onClick={() => {
          setValue(value+5)
        }}>+5</button>
        <button className='px-2.5 py-px rounded border bg-gray-400 active:scale-98 hover:bg-gray-300' 
        onClick={() => {
          if(value>=3) {
            setValue(value-3)
          }
        }}>-3</button>
      </div>
    </div>
  )
}

export default App