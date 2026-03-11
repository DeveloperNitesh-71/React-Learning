import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Filter from './components/Filter'
import TaskContainer from './components/TaskContainer'

const App = () => {
  return (
    <div className='h-max max-h-100 p-5 rounded-2xl border w-max flex flex-col items-center justify-start gap-4'>
      <Header />
      <Input />
      <Filter />
      <TaskContainer />
    </div>
  )
}

export default App