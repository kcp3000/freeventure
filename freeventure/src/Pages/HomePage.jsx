import SearchBarHome from "../components/SearchbarHome"
import WeatherContainer from "../components/WeatherContainer"
import { useState, useEffect } from "react"
import { handleFetch } from "../../utils"
import { API_KEY } from "../../config"

function HomePage() {

  const [weather, setWeather] = useState([])
  const [error, setError] = useState(null)



  const handleSubmit = async (location) => {
    event.preventDefault();
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`)
    if (data) setWeather(data)
    if (error) setError(error)
  }

  if (error) return <p>{error.message}</p>

  // useEffect(() => {
  //   console.log('TEST:', weather)
  // }, [weather])
  return (
    <>
      <SearchBarHome handleSubmit={handleSubmit} />
      <div className="checkOtherWeather">
        <p>Scroll for Weathers Around the World!</p>
      </div>
      <WeatherContainer setError={setError} />

    </>
  )

}

export default HomePage