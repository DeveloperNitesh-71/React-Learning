import React from 'react'

const Buttons = ({ins, fun}) => {
  return (
    <button className='h-9 w-9 border rounded text-3xl font-medium flex justify-center items-center p-5' onClick={fun}>{ins}</button>
  )
}

export default Buttons