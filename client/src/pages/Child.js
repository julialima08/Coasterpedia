import { useEffect, useState } from 'react'
import axios from 'axios'
import RollerCoasterCard from '../components/RollerCoasterCard'
import { useNavigate } from 'react-router-dom'
import CreateChildRideForm from '../components/CreateChildRideForm'
import '../popUp.css'

const Child = () => {
  const [rides, setRides] = useState([])
  const [popUp, setPopUp] = useState(false)

  const getChildRides = async () => {
    try {
      let response = await axios.get('http://localhost:3001/api/kids')
      console.log(response.data.kids)
      setRides(response.data.kids)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChildRides()
  }, [])

  let navigate = useNavigate()
  const getRideDetails = (id) => {
    navigate(`/kidRideDetails/${id}`)
  }

  const handleClick = () => {
    setPopUp(!popUp)
  }

  if (popUp) {
    document.body.classList.add('active-popUp')
  } else {
    document.body.classList.remove('active-popUp')
  }

  const handleSubmit = () => {}

  return (
    <div>
      <button onClick={handleClick} className="btn-popUp">
        Add new ride
      </button>

      {popUp && (
        <div className="popUp">
          <div onClick={handleClick} className="overlay"></div>
          <div className="popUp-content">
            <button className="close-popUp" onClick={handleClick}>
              CLOSE
            </button>
            <CreateChildRideForm onSubmit={handleSubmit} />
          </div>
        </div>
      )}
      <div>
        {rides.map((ride) => (
          <div key={ride._id} onClick={() => getRideDetails(ride._id)}>
            <RollerCoasterCard image={ride.image} name={ride.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Child
