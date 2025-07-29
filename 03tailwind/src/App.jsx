import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    userName : "Ayush",
    age: 24
  }

  return (
    <>
      <p className="read-the-docs bg-green-700 text-red p-4 rounded-xl mb-4">
        Tailwind Test
      </p>
      <Card userName="Ayush" someObject = {myObj}/>
    </>
  )
}

export default App
