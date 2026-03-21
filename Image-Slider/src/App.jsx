import React, { useState } from 'react'
import images from './image.js'

const App = () => {
  console.log(images);

  
  const [idx, setIdx] = useState(0)
  const [image, setImage] = useState(images[idx]);
  function Inc() {
    if(idx<images.length){
      setIdx(idx+1)
      setImage(images[idx+1])
    }else{
      setIdx(0)
      setImage(images[0])
    }
  }


  function dec() {
    if(idx>0){
      setIdx(idx-1)
      setImage(images[idx-1])
    }else{
      setIdx(images.length-1)
      setImage(images[images.length-1])
    }
  }


  return (
    <div className='h-max w-150 border rounded-2xl flex flex-col items-center justify-between gap-2.5 p-10'>
      <img src={image} className='h-80 w-full object-cover' />
      <div className='flex items-center justify-center gap-10'>
        <button className='border rounded px-5 py-1 active:scale-98' onClick={dec}>Previous</button>
        <button className='border rounded px-5 py-1 active:scale-98' onClick={Inc}>Next</button>
      </div>
    </div>
  )
}

export default App

