

import { useState } from 'react'
import './App.css'
import useTheme, { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/cARD.JSX'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>{
      setThemeMode("light")
  }
  const darkTheme = () =>{
      setThemeMode("dark")
  }

    useEffect(()=>{
        document.querySelector("html").classList.remove("light","dark")
        document.querySelector("html").classList.add(themeMode)
    },[themeMode])

  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>  

<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/*theme button */}
          <ThemeButton/>
      </div>

      <div className="w-full max-w-sm mx-auto">
          {/*card*/ }
          <Card/>
      </div>
  </div>
</div>

    </ThemeProvider>
  )
}

export default App
