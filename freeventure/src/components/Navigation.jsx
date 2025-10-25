import { Link } from "react-router-dom"
import { useTheme } from "../ThemeContext";
import { useState } from "react";
import ThemeComponent from "./ThemeComponent";

function NavBar({ title }) {

  const darkTheme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const themeStyles = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#173B3B' : '#CEDEDA',
    // content: darkTheme ? 'Light Mode' : 'Dark Mode',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const getLinkFont = (index) => ({
    color: isHovered === index ? 'blue' : darkTheme ? '#173B3B' : '#CEDEDA',
    transition: 'color 0.3s',
  });

  return <nav className="nav" style={themeStyles}>
    <div className="logoButtonContainer">
      <div className="logoContainer">
        <Link to='/' style={getLinkFont('logo')} className="logo" onMouseEnter={() => setIsHovered('logo')}
          onMouseLeave={() => setIsHovered(null)}>
          {title}
        </Link>
      </div>
    </div>
    <ul className="navList" >
      <li><Link to="/" style={getLinkFont(0)} onMouseEnter={() => setIsHovered(0)}
        onMouseLeave={() => setIsHovered(null)}>
        Home
      </Link>
      </li>
      <li><Link to="/forecast" style={getLinkFont(1)} onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(null)}>
        Forecast
      </Link>
      </li>
      <li>
        <Link to="/astronomy" style={getLinkFont(2)} onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}>
          Astronomy
        </Link>
      </li>
      <li>
        <ThemeComponent />
      </li>
    </ul>
  </nav >

}

export default NavBar