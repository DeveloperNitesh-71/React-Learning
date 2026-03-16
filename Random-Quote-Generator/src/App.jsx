import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {
  const [quote, setQuote] = useState("")
  
  async function Quote() {
    let response = await axios.get("https://api.quotable.io/random")
    setQuote(response.data.content)
  }
  
  useEffect(() => {
    Quote()
  }, [])
  
  return (
    <div className='min-h-50 w-100 border rounded-2xl bg-gray-200 flex items-center justify-between flex-col text-center p-5 gap-2.5'>
      <p className='font-medium text-[20px]'>{quote}</p>
      <button className='border rounded px-5 py-1 bg-blue-300 font-medium'
      onClick={Quote}>New Quote</button>
    </div>
  )
}

export default App