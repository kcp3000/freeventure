import sunrise from "../assets/sunrise.png"
import sunsetIcon from "../assets/sunsetIcon.png"
import moonriseIcon from "../assets/moonriseIcon.webp"
import moonset1 from "../assets/moonset1.webp"

// fetching astronomy
function AstronomyContainer({ astronomyData }) {
  return (
    <div className="astroCard">
      {astronomyData.location && (
        <>
          <h3>{astronomyData.location.name}</h3>
          <div className="sunrise">
            <p>Sunrise: {astronomyData.astronomy.astro.sunrise}</p>
            <img id="sunrisePic" src={sunrise} alt="Sunrise Icon" />
          </div>
          <div className="sunset">
            <p>Sunset: {astronomyData.astronomy.astro.sunset}</p>
            <img id="sunsetPic" src={sunsetIcon} alt="Sunset Icon" />
          </div>
          <div className="moonRise">
            <p>Moonrise: {astronomyData.astronomy.astro.moonrise}</p>
            <img id="moonrisePic" src={moonriseIcon} alt="Moonrise Icon" />
          </div>
          <div className="moonset">
            <p>Moonset: {astronomyData.astronomy.astro.moonset}</p>
            <img id="moonsetPic" src={moonset1} alt="Moonset Icon" />
          </div>
        </>
      )}
    </div>
  )
}

export default AstronomyContainer