import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [mail,stmail] = useState("")
  const [pass,stpass] = useState("")
  const print=(e)=>{
    e.preventDefault();
    console.log(mail,pass)
  }
  return (
    /*<div >
      <label>Email:</label>
      <input type="text" placeholder="Enter your email" required value={mail} onChange={(e) => stmail(e.target.value)} /><br></br>
      <label>Password:</label>
      <input type="password" placeholder="Enter your password" value={pass} onChange={(e)=>stpass(e.target.value)} /><br></br>
      <button onClick={(e)=>{console.log(mail,pass)}}> SUBMIT</button><br></br>
      <button onClick={(e)=>print()}>Nsubmit</button> 
      

      
    </div> */

    <form>
      <label>Email:</label>
      <input type="text" placeholder="Enter your email" required value={mail} onChange={(e) => stmail(e.target.value)} /><br></br>
      <label>Password:</label>
      <input type="password" placeholder="Enter your password" value={pass} onChange={(e)=>stpass(e.target.value)} /><br></br>
      <button onClick={print}> SUBMIT</button><br></br>
    </form>
  )

}
export default App
