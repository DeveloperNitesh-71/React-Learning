import React, { useState } from 'react'

const App = () => {
  const [characters, setCharacters] = useState("")
  const handler = (e) => {
    let values = e.target.value;
    if(values.length>=80 && values.length<=100){
      setCharacters(values)
      e.target.classList.add("text-red-700")
    }
    else if(values.length<80) {
      setCharacters(values)
      e.target.classList.remove("text-red-700")
    }
    else if(values.length<=100){
      setCharacters(values)
    }
  }
  return (
    <div className='flex-col flex items-end'>
      <textarea className='h-63.5 border w-125 rounded-2xl p-5 bg-gray-300' value={characters}
      onChange={handler}></textarea>
      <span>character {characters.length}/100</span>
    </div>
  )
}

export default App

