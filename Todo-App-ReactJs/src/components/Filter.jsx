import React from 'react'

const Filter = () => {
  return (
    <div className='w-full flex items-center justify-end'>
        <select name="Status" className='filter border outline-0'>
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
        </select>
    </div>
  )
}

export default Filter