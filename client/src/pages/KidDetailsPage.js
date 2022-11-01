import KidRideDetails from '../components/KidRideDetails'
import { useState } from 'react'

const KidDetailsPage = () => {
  const [ride, setRide] = useState([])

  return (
    <div>
      <KidRideDetails ride={ride} setRide={setRide} />
    </div>
  )
}

export default KidDetailsPage
