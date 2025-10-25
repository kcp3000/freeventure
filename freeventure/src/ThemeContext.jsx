import React, { useState, useContext } from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}