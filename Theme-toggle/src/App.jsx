import React, { useState } from 'react'

const App = () => {
  const [bgclo, setBgclo] = useState("white")
  
  function theme() {
    if(bgclo === "white"){
      setBgclo("black")
    }
    else if(bgclo === "black"){
      setBgclo("white");
    }
  }

  return (
    <div className='container' style={{backgroundColor:bgclo}}>
      <button onClick={theme}>Click</button>
    </div>
  )
}

export default App