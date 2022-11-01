import KidRideDetails from '../components/KidRideDetails'
import { useState } from 'react'

const KidDetailsPage = () => {
  const [ride, setRide] = useState([])

  return (
    <div>
      <h1>Hello</h1>
      <KidRideDetails description={ride.description} setRide={setRide} />
    </div>
  )
}

export default KidDetailsPage
