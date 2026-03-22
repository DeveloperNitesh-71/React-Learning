import React from 'react'
import Home from './Home'
import About from './About'
import Preview from './Preview'
import { Link, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-3xl font-medium flex justify-evenly w-full bg-green-700 py-2.5'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/preview'>Preview</Link>
    </div>
  )
}

export default Navbar