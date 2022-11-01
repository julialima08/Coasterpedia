import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function KidRideDetails({ ride, setRide }) {
  let { id } = useParams()

  const getRideById = async () => {
    let response = await axios.get(`http://localhost:3001/api/kids/${id}`)
    console.log(response.data)
    setRide(response.data)
  }

  let navigate = useNavigate()
  const deleteRide = async () => {
    await axios.delete(`http://localhost:3001/api/kids/${id}`)
    navigate('/kids')
  }

  useEffect(() => {
    getRideById()
  }, [])

  return (
    <div className="KidRideDetails">
      {ride.kid && (
        <>
          <img src={ride.kid.image}></img>
          <h2>{ride.kid.name}</h2>
          <h3>Description: {ride.kid.description}</h3>
          <h4>Year Made: {ride.kid.year}</h4>
          <h4>History: {ride.kid.history}</h4>
          <h4>Park Location: {ride.kid.parkLocation}</h4>
          <h4>Height: {ride.kid.height}</h4>
          <h4>Capacity: {ride.kid.capacity}</h4>
          <h4>FlashPass: {ride.kid.flashPass}</h4>
          <h4>Rating: {ride.kid.rating}</h4>
          <button onClick={deleteRide}>Delete Ride</button>
        </>
      )}
    </div>
  )
}

export default KidRideDetails
