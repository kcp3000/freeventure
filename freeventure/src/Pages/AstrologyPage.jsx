import AstronomyContainer from "../components/AstonomyContainer"
import { useState } from "react";
import AstronomySearch from "../components/AstronomySearch";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";
import galaxy2 from "../assets/galaxy2.jpeg";
import galaxyLight from "../assets/galaxyLight.jpg";
import { useTheme } from "../ThemeContext";
import earthIcon from "../assets/earthIcon.png"



const AstronomyPage = () => {
  const [astronomyData, setAstronomy] = useState('')
  const [error, setError] = useState(null)

  const darkTheme = useTheme()

  const themeStyles = {
    color: '#CCDAD1',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleSubmit = async (event, query) => {
    event.preventDefault();
    if (!query) {
      setError("Please enter a location")
      return;
    };
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${query}&dt=`)
    if (data) {
      setAstronomy(data)
      setError(null)
    } else {
      setError(error)
    }
  }

  const container = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${darkTheme ? galaxy2 : galaxyLight})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: 'background-image 0.3s'
  }

  const earth = {
    height: "75px",
    width: "75px",
    borderRadius: "50%",
    backgroundImage: `url(${earthIcon})`,
    position: "relative",
    backgroundSize: "cover",
    animation: "earth-orbit 7s linear infinite"
  }




  return (
    <div>
      <div className="container" style={container}>
        <div className="sun">
          <div style={earth} className="earth" />
          <div className="moon" />
        </div>
        <div className="outsideContainer" style={themeStyles}>
          <div className="headingContainer">
            <h1>Astronomy</h1>
          </div>
          <AstronomySearch onSubmit={handleSubmit} />
          {error && <p>{error}</p>}
          {astronomyData ? (
            <AstronomyContainer astronomyData={astronomyData} />
          ) : (
            !error && <p>Please enter a location to see the astronomy</p>
          )}
        </div>
      </div>

    </div>
  )
}


export default AstronomyPage
