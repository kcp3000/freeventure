import { useState } from "react";
import { useTheme } from "../ThemeContext";
import Earth from "../assets/Earth.webp"

const ForecastSearch = ({ onSubmit }) => {

  const [query, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const darkTheme = useTheme()

  const themeStyles = {
    backgroundColor: darkTheme ? '#1B2222' : '#EBEBEB',
    color: darkTheme ? '#CEDEDA' : '#173B3B',
  }

  return (
    <div className="forecastPageContainer">
      <div className="headingForecast">
        <h1>
          Forecast
        </h1>
      </div>
      <div className="forecastFormContainer">
        <div className="forecastEarthContainer">
          <img src={Earth} alt="earth" id="earth" />
        </div>
        <form onSubmit={(event) => onSubmit(event, query)}>
          <label htmlFor="searchInput"></label>
          <input type="text" className="searchBarInput" id="searchInput" value={query} onChange={handleChange} placeholder="Enter Location" />
          <button type="submit" className="btn btn-success" style={themeStyles}>Search</button>
        </form>
      </div>
    </div>

  )
}

export default ForecastSearch