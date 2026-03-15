import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {

      const date = new Date()

      const hours = String(date.getHours()).padStart(2, "0")
      const minutes = String(date.getMinutes()).padStart(2, "0")
      const seconds = String(date.getSeconds()).padStart(2, "0")

      setTime(`${hours}:${minutes}:${seconds}`)

    }, 1000)

    return () => clearInterval(interval)

  }, [])


  return (
    <div className='text-6xl font-medium'>
      {time}
    </div>
  )
}

export default App