import { useEffect, useState } from 'react'
import axios from 'axios'
import RollerCoasterCard from '../components/RollerCoasterCard'
import { useNavigate } from 'react-router-dom'
import CreateChildRideForm from '../components/CreateChildRideForm'
import '../CSS/popUp.css'

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
  const initialRideState = {
    image: '',
    name: '',
    description: '',
    height: '',
    capacity: '',
    flashPass: '',
    parkLocation: '',
    year: '',
    history: '',
    rating: ''
  }
  const [newRide, setNewRide] = useState(initialRideState)

  const addRide = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/api/kids', newRide)
    await getChildRides()

    setNewRide(initialRideState)
  }

  const handleChange = (e) => {
    setNewRide({ ...newRide, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <CreateChildRideForm
        addRide={addRide}
        handleChange={handleChange}
        newRide={newRide}
      />
      <div className="cardHolder">
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
