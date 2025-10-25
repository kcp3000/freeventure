import { useEffect, useState } from "react";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";
import { useTheme } from "../ThemeContext";

const locations = ['new york', 'london', 'tokyo', 'berlin', 'paris'];

// fetching multiple 
function WeatherContainer({ setError }) {
  const [weatherData, setWeatherData] = useState([]);

  const darkTheme = useTheme();

  const themeStylesIdx = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#455F4E' : '#CCDAD1',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const hiddenInfoTheme = {
    backgroundColor: darkTheme ? '#1B2222' : '#EBEBEB',
    color: darkTheme ? '#CCDAD1' : '#455F4E',
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherResponses = await Promise.all(
        locations.map(async (location) => {
          const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`);
          if (error) setError(error);
          return data;
        })
      );
      setWeatherData(weatherResponses);
    };

    fetchWeatherData();
  }, [setError]);

  return (
    <div className="weatherDataContainer">
      {weatherData.length > 0 ? (
        weatherData.map((weather, index) => (
          <div className="weatherIdxContainer" key={index} style={themeStylesIdx}>
            <h3 className="nameLocation">{weather.location.name}</h3>
            <img src={weather.current.condition.icon} alt="" />
            <p>{weather.current.condition.text}</p>
            <p>{Math.floor(weather.current.temp_f)} °F</p>
            <caption>Hover Me!</caption>
            <div className="hiddenInfo" style={hiddenInfoTheme}>
              <p>Feels like: {Math.floor(weather.current.feelslike_f)} °F</p>
              <p>Wind Speed: {Math.floor(weather.current.wind_mph)} MPH, (KPH): {Math.floor(weather.current.wind_kph)}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherContainer