import React, { useState } from 'react'
import Input from './components/Input'
import Buttons from './components/Buttons'

const App = () => {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '=','C']
  const [InitialValue, setinitialValue] = useState("")
  
  function keyDown(e) {
    if(e.target.innerHTML === "C") {
      setinitialValue('')
    }
    else if(e.target.innerHTML === "="){
      setinitialValue(eval(InitialValue))
    }
    else{
      setinitialValue(InitialValue + e.target.innerHTML)
    }
  }
  return (
    <div className='border rounded p-2.5 w-65 gap-5 grid grid-cols-1 grid-rows-1 place-items-center'>
      <Input value={InitialValue}/>
      <div className='grid grid-cols-4 gap-5'>
        {nums.map(num => {
          return <Buttons ins={num} key={num} fun={keyDown}/>
        })}
      </div>
    </div>
  )
}

export default App