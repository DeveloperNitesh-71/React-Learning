import { useState } from "react"
      
const App = () => {
      
  let [pass, setPass] = useState("")
      
  function GenPass() {
    pass = "";
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 12; i++) {
      let idx = Math.floor(Math.random()*26)
      pass += alpha[idx]
    } 
    return setPass(pass)
  }   
      
  return (
    <div className="border rounded flex flex-col justify-center items-center gap-5 p-5 h-100 w-150">
      
      <input type="text" placeholder="Password" className="border rounded px-5 py-1 outline-0 w-full" value={pass} />
      
      <div className="flex items-center justify-between w-full">
        <label htmlFor="Cap" className="w-full">Capitalize</label>
        <input type="checkbox" id="Cap" checked/>
      </div>
      
      <div className="flex items-center justify-between w-full">
        <label htmlFor="Symbols" className="w-full">Symbols</label>
        <input type="checkbox" id="Symbols" checked/>
      </div>
      
      <div className="flex items-center justify-between w-full">
        <label htmlFor="Number" className="w-full">Numbers</label>
        <input type="checkbox" id="Number" checked/>
      </div>
      
      <button className="px-5 py-1 border rounded font-medium bg-blue-100 active:scale-98" onClick={GenPass}>Generate Password</button>
            
    </div>
  )   
}     
      
export default App

