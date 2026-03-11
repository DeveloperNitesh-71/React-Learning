import React, { useState } from 'react'
import TaskContainer from './TaskContainer'

const Input = () => {
  const [task, setTask] = useState("")
  return (
    <div className='flex items-center justify-center gap-5'>
        <input type="text" placeholder='Write task...' className='px-2.5 py-px rounded outline-0 border ' value={task} onChange={(e) => {
          setTask(e.target.value)
        }}/>
        <button className='px-5 py-px rounded border active:scale-98 font-medium'
        onClick={() => {
          console.log(task);
          <TaskContainer task={task}/>
          setTask("")
          
        }}>Add</button>
    </div>
  )
}

export default Input