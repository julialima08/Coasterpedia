import detailsPage from '../CSS/detailsPage.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function KidRideDetails({ ride, setRide }) {
  let { id } = useParams()

  const getRideById = async () => {
    let response = await axios.get(`/api/kids/${id}`)
    setRide(response.data)
  }

  let navigate = useNavigate()
  const deleteRide = async () => {
    await axios.delete(`/api/kids/${id}`)
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
          <div className="leftDescriptionKids">
            <h4>Height: {ride.kid.height}</h4>
            <h4>Park Location: {ride.kid.parkLocation}</h4>
            <h4>Capacity: {ride.kid.capacity}</h4>
          </div>
          <div className="rightDescriptionKids">
            <h4>FlashPass: {ride.kid.flashPass}</h4>
            <h4>Manufacturer: {ride.kid.history}</h4>
            <h4>Year Made: {ride.kid.year}</h4>
          </div>
          <h4 className="rating">Rating: {ride.kid.rating}</h4>
          <div className="buttonHolder">
            <button onClick={deleteRide} className="delete-btn">
              Delete Ride
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default KidRideDetails
