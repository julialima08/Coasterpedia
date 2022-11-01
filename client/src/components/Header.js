import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>Coasterpedia</h1>
      </div>
      <div className="nav">
        {/* <nav> */}
        <div className="homeLink">
          <Link to="/">Home</Link>
        </div>
        <div className="childLink">
          <Link to="/kids">Child Rides</Link>
        </div>
        <div className="adultLink">
          <Link to="/adults">Adult Rides</Link>
        </div>
        {/* </nav> */}
      </div>
    </div>
  )
}

export default Header
