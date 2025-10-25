import { useState } from "react"
import ForecastSearch from "../components/ForecastSearch"
import ForecastContainer from "../components/ForecastContainer"
import { handleFetch } from "../../utils"
import { API_KEY } from "../../config"



const ForecastPage = () => {

  const [forecast, setForecast] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event, query) => {
    event.preventDefault();
    if (!query) {
      setError("Please enter a location")
      return;
    };
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5&aqi=yes&alerts=yes`)
    if (data) {
      setForecast(data)
      setError(null)
    } else {
      setError(error)
    }
  }



  return (
    <div className="forecastContainer">
      <ForecastSearch onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {forecast ? (
        <ForecastContainer forecast={forecast} />
      ) : (
        !error &&
        <div className="errorContainer"><p>Please enter a location to see the forecast</p></div>
      )}
    </div>
  )
}

export default ForecastPage