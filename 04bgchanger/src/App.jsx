import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{background : colour}}>
          <p>This is sentende bro</p>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
           
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl'>
       
        <button onClick = {() => setColour("Red")} className='outline-none px-4  rounded-full' style={{backgroundColor:"red"}}>Red</button>
        <button className='outline-none px-4  rounded-full' style={{backgroundColor:"green"}}>Green</button>
        <button className='outline-none px-4  rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
        <button className='outline-none px-4  rounded-full' style={{backgroundColor:"pink"}}>Pink</button>
      </div>
      </div>
    </div>
    
    
  )
}

export default App
