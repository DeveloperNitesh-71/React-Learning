import React from 'react'
import Task from './Task'

const TaskContainer = ({task}) => {
  console.log("runnng...");
  
  return (
    <div className='Task flex flex-col gap-2 w-full overflow-auto'>
      <Task value={task}/>
      
    </div>
  )
}

export default TaskContainer
