
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("white")

  return (
    <>
      <div style={{background:color,height:'100vh'}}>
        <h1 style={{color:'black',fontWeight:'bolder',textAlign:'center',paddingTop:'20px'}}>Background Changing App</h1>
        <div style={{justifyContent:'space-around',display:'flex',marginTop:'600px'}}>
        <button onClick={()=>setColor("teal")} style={{background:'black',color:'white',borderRadius:'8px',width:'80px'}}>Teal</button>
        <button onClick={()=>setColor("orange")} style={{background:'black',color:'white',borderRadius:'8px',width:'80px'}}>Orange</button>
        <button onClick={()=>setColor("crimson")} style={{background:'black',color:'white',borderRadius:'8px',width:'80px'}}>Crimson</button>
        <button onClick={()=>setColor("cyan")} style={{background:'black',color:'white',borderRadius:'8px',width:'80px'}}>Cyan</button>
        <button onClick={()=>setColor("blue")} style={{background:'black',color:'white',borderRadius:'8px',width:'80px'}}>Blue</button>
        <button onClick={()=>setColor("plum")} style={{background:'black',color:'white',borderRadius:'8px',width:'80px'}}>plum</button>
        </div>
      </div>
      
    </>
  )
}

export default App
