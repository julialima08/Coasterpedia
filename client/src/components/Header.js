import { Link } from 'react-router-dom'
import headerpic from '../pictures/headerpic.png'

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <img src={headerpic} alt="header" className="header-pic" />
        <h1>Coasterpedia</h1>
      </div>
      <div className="nav">
        <div className="homeLink">
          <Link to="/">Home</Link>
        </div>
        <div className="childLink">
          <Link to="/kids">Child Rides</Link>
        </div>
        <div className="adultLink">
          <Link to="/adults">Adult Rides</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
