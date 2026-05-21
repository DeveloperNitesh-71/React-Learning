import React from 'react'

const Input = ({value}) => {
  return (
    <div>
        <input type="text" className='px-2.5 py-2 outline-none border rounded bg-gray-300 w-58' value={value} readOnly/>
    </div>
  )
}

export default Input