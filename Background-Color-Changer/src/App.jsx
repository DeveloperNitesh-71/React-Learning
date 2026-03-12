import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("rgb(255,255,255)")

  function Random() {
    let color1 = (Math.floor(Math.random() * 256))
    let color2 = (Math.floor(Math.random() * 256))
    let color3 = (Math.floor(Math.random() * 256))
    let newColor = `rgb(${color1}, ${color2}, ${color3})`
    setColor(newColor)
  }
  return (
    <div className='h-full w-full flex items-center justify-center' style={{ backgroundColor: color }}>
      <button className='border px-5 py-1 rounded bg-gray-300 active:scale-98 hover:bg-gray-200 font-medium' onClick={Random}>Change Color</button>
    </div>
  )
}


export default App