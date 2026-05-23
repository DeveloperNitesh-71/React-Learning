import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-2 bg-blue-900 absolute top-0 left-0 w-full'>
        <span className='text-3xl font-medium'>Black Clover</span>
        <div className='flex justify-center items-center gap-5'>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/products">Products</Link>
        </div>
    </div>
  )
}

export default Navbar