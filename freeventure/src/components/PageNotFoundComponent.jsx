import Route from 'react';
import Earth from "../assets/Earth.webp"

const NotFoundPage = () => {
  return (
    <div className='notFoundContainer'>
      <h1>404</h1>
      <div className="earthContainer">
        <img src={Earth} alt="earth" id="earth" />
      </div>
      <h3>Page Not Found</h3>
    </div>
  )
}

export default NotFoundPage