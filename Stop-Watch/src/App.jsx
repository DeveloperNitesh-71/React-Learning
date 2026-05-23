import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState("00:00:00")
  let hrs = 0;
  let min = 0;
  let sec = 0;
  let interval = null;
  function start() {
    interval = setInterval(() => {
      if (sec < 59) {
        sec++;
        let exhrs = String(hrs).padStart(2, "0")
        let exmin = String(min).padStart(2, "0")
        let exsec = String(sec).padStart(2, "0")
        let Time = `${exhrs}:${exmin}:${exsec}`;
        setTime(Time)
      }
      else if (sec = 59 && min < 60) {
        sec = 0;
        min++;
        let exhrs = String(hrs).padStart(2, "0")
        let exmin = String(min).padStart(2, "0")
        let exsec = String(sec).padStart(2, "0")
        let Time = `${exhrs}:${exmin}:${exsec}`;
        setTime(Time)
      }
      else if (min == 59 && sec == 59) {
        min = 0;
        sec = 0;
        hrs++;
        let exhrs = String(hrs).padStart(2, "0")
        let exmin = String(min).padStart(2, "0")
        let exsec = String(sec).padStart(2, "0")
        let Time = `${exhrs}:${exmin}:${exsec}`;
        setTime(Time)
      }
    }, 1000)
    return () => clearInterval(interval)
  }

  function stop() {
    return () => clearInterval(interval)
  }
  
  return (
    <div className='flex flex-col h-max w-max p-10 gap-5 border items-center justify-center rounded-2xl'>
      <span className='font-medium text-4xl'>{time}</span>
      <div className='flex items-center justify-center gap-1'>
        <button className='px-5 py-.5 rounded border active:scale-98 bg-gray-300 font-medium hover:bg-gray-200' onClick={stop}>Stop</button>
        <button className='px-5 py-.5 rounded border active:scale-98 bg-gray-300 font-medium hover:bg-gray-200' onClick={(e) => {
          start()
          e.target.disabled = true;
          e.target.style.opacity = "0.5"
        }}>Start</button>
        <button className='px-5 py-.5 rounded border active:scale-98 bg-gray-300 font-medium hover:bg-gray-200'>Reset</button>
      </div>
    </div>
  )
}

export default App