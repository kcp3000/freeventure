import { useTheme } from "../ThemeContext"
import React from "react"

function ForecastContainer({ forecast }) {

  const darkTheme = useTheme();

  const themeStylesIdx = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#455F4E' : '#CCDAD1',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div className="forecastContainer">
      {forecast.location && (
        <div className="forecastListContainer">
          <div className="forecastHeaderContainer">
            <h3 className="forecastHeader">{forecast.location.name}</h3>
          </div>
          <ul className="forecastList">
            {forecast.forecast.forecastday.map((day, indx) => (
              <li key={indx} style={themeStylesIdx} className="individualList">
                <h4>{day.date}</h4>
                <img src={day.day.condition.icon} alt="" />
                <p>High: {day.day.maxtemp_f} °F</p>
                <p>Low: {day.day.mintemp_f} °F</p>
                <p>Chance of Rain: {day.day.daily_chance_of_rain}%</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ForecastContainer
