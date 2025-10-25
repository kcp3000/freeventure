import React from "react"
import { useTheme, useThemeUpdate } from "../ThemeContext"

const ThemeComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#1B2222' : '#EBEBEB',
    color: darkTheme ? '#CEDEDA' : '#173B3B',
    transition: 'background-color 0.3s, color 0.3s',
  }


  return (
    <div className="buttonNavContainer">
      <button onClick={toggleTheme} style={themeStyles}>Dark Mode</button>
    </div>
  )
}


export default ThemeComponent