import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      const[counter,setCounter] = useState(15)
  //let counter = 15
  const increaseValue = () => {
    console.log("Increase value button pressed",counter);
    if(counter<=20) setCounter(prevcounter => prevcounter +1)
    if(counter<=20) setCounter(prevcounter => prevcounter +1)
    if(counter<=20) setCounter(prevcounter => prevcounter +1)
    if(counter<=20) setCounter(prevcounter => prevcounter +1)
   
  }
  const decreaseValue = () =>{
      if(counter >0) setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increaseValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>

    </>
  )
}

export default App
