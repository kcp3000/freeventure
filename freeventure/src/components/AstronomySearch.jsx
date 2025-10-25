import { useState } from "react";
import { useTheme } from "../ThemeContext";

const AstronomySearch = ({ onSubmit }) => {

  const [query, setValue] = useState('');

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#455F4E' : '#CCDAD1',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="formContainerAstro">
      <form className="astroSearch" onSubmit={(event) => onSubmit(event, query)}>
        <label htmlFor="searchInput">Enter a Search Term </label>
        <input type="text" className="searchBarInput" id="searchInput" value={query} onChange={handleChange} placeholder="Enter Location" />
        <button type="submit" className="btn btn-success" style={themeStyles}>Search</button>
      </form>
    </div>
  )
}

export default AstronomySearch