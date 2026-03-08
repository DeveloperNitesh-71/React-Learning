import React, { useState } from 'react'

const App = () => {

  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([]);
  function pushNotes() {
    let notee = [...notes]    
    notee.push(note)
    setNotes(notee)  
    setNote("");
  }
  return (
    <div className='p-5 lg:flex-row gap-2.5 flex flex-col'>
      <div className="noteCreate flex flex-col gap-2.5">
        <h1 className='text-white text-3xl font-medium'>Notes App</h1>
        <textarea className='h-63 w-125 bg-white rounded-2xl border-0 p-2.5 outline-0' placeholder='write note' value={note} onChange={(e) => {
          setNote(e.target.value)
        }}></textarea>
        <button className='text-white bg-red-400 w-max px-5 py-1 rounded-[5px] font-medium' onClick={pushNotes}>Add Note</button>
      </div>
      <div className="createdNotes p-11 gap-2.5 flex flex-wrap">
        {notes.map((not,idx) => {
          return <div key={idx} className='p-2.5 h-40 w-30 bg-white rounded-[10px]'>{not}</div>
        })}        
      </div>
    </div>
  )
}

export default App