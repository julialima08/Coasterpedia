import { useEffect, useState } from 'react'
import axios from 'axios'
import RollerCoasterCard from '../components/RollerCoasterCard'
import { useNavigate } from 'react-router-dom'

const Child = () => {
  const [rides, setRides] = useState([])

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

  return (
    <div>
      <h1>Child</h1>
      <div>
        {rides.map((ride) => (
          <div key={ride._id} onClick={() => getRideDetails(ride._id)}>
            <RollerCoasterCard image={ride.image} name={ride.name} />
          </div>
        ))}
      </div>
      {/* <div>
        {rides.map((ride, i) => (
          <div className="kidsDiv" key={i}>
            <RollerCoasterCard name={ride.name} />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Child
