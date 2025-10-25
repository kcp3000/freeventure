import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Earth from "../assets/Earth.webp"
import { useTheme } from "../ThemeContext"



const SearchBar = () => {

  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? '#1B2222' : '#EBEBEB',
    color: darkTheme ? '#CEDEDA' : '#173B3B',
    transition: 'background-color 0.3s, color 0.3s',
  }

  const [value, setValue] = useState('');
  const navigate = useNavigate()


  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?query=${value}`)
  }

  return (

    <div className="searchBarContainer">
      <div className="headingNEarth">
        <div className="headingWeatherContainer">
          <h2>Today's Weather? </h2>
        </div>
        <div className="earthContainer">
          <img src={Earth} alt="earth" id="earth" />
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <label htmlFor="location-search">Find it here </label>
          <input className="searchBarInput" type="text" id="location-search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter Location" />
          <button type="submit" class="search-button" style={themeStyles}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar