import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Preview from './components/Preview'
const App = () => {
  return (
    <div className='absolute top-0 w-full text-white h-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/preview' element={<Preview />}/>
      </Routes>
    </div>
  )
}

export default App