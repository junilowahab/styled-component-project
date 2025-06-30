import { useState } from 'react'
import Name from './Name'
import { ThemeToggle } from './ThemeToggle'

const App = () => {

  const [light, setLight] = useState(true)

  const toggleTheme = () => {
    setLight((prev) => !prev)
  }

  return (
    <>
      <Name light={light}></Name>
      <ThemeToggle light={light} toggleTheme={toggleTheme}></ThemeToggle>
    </>
  )
}

export default App