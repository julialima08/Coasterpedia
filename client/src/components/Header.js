import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>Coasterpedia</h1>
      </div>
      <div className="nav">
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/kids">
            <button>Child Rides</button>
          </Link>
          <Link to="/adults">
            <button>Adult Rides</button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
