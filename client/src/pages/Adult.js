import { useEffect, useState } from 'react'
import axios from 'axios'
import RollerCoasterCard from '../components/RollerCoasterCard'
import { useNavigate } from 'react-router-dom'
import CreatedAdultCoaster from '../components/CreateAdultRideForm'
import '../CSS/popUp.css'

const Adult = () => {
  const [rides, setRides] = useState([])

  const getAdultRide = async () => {
    try {
      let response = await axios.get('http://localhost:3001/api/adults')
      console.log(response.data.adults)
      setRides(response.data.adults)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAdultRide()
  }, [])

  let navigate = useNavigate()
  const getRideDetails = (id) => {
    navigate(`/adultRideDetails/${id}`)
  }

  const initialRideState = {
    image: '',
    name: '',
    description: '',
    height: '',
    capacity: '',
    flashPass: '',
    parkLocation: '',
    rideFee: '',
    year: '',
    history: '',
    rating: ''
  }
  const [newRide, setNewRide] = useState(initialRideState)

  const addRide = async (e) => {
    e.preventDefault()
    console.log('addRide')
    await axios.post('http://localhost:3001/api/adults', newRide)
    await getAdultRide()
    setNewRide(initialRideState)
  }

  const handleChange = (e) => {
    setNewRide({ ...newRide, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <CreatedAdultCoaster
        addRide={addRide}
        handleChange={handleChange}
        newRide={newRide}
      />

      {rides.map((ride) => (
        <div key={ride._id} onClick={() => getRideDetails(ride._id)}>
          <RollerCoasterCard image={ride.image} name={ride.name} />
        </div>
      ))}
    </div>
  )
}

export default Adult
