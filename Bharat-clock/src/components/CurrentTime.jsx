import React from 'react'

const CurrentTime = () => {
  let time = new Date()
  return (
    <div className='flex self-center font-medium text-2xl'>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</div>
  )
}

export default CurrentTime