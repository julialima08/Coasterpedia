import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function KidRideDetails(props) {
  let { id } = useParams()

  const getRideById = async () => {
    let response = await axios.get(`http://localhost:3001/api/kids/${id}`)
    console.log(response.data)
    props.setRide(response.data)
  }

  useEffect(() => {
    getRideById()
  }, [])

  return (
    <div className="KidRideDetails">
      <img src={props.image}></img>
      <h2>{props.name}</h2>
      <h3>Description: {props.description}</h3>
      <h4>Year Made: {props.year}</h4>
      <h4>Park Location: {props.parkLocation}</h4>
      <h4>Height: {props.height}</h4>
      <h4>Capacity: {props.capacity}</h4>
      <h4>FlashPass: {props.pass}</h4>
      <h4>Thrill Level: {props.thrill}</h4>
      <h4>Rating: {props.rating}</h4>
    </div>
  )
}

export default KidRideDetails
