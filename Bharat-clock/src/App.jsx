import React from 'react'
import ClockName from './components/ClockName'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-2.5'>
      <ClockName />
      <ClockSlogan />
      <CurrentTime />
    </div>

  )
}

export default App