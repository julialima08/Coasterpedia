import AdultRideDetails from '../components/AdultRideDetails'
import { useState } from 'react'

const AdultDetailsPage = () => {
  const [ride, setRide] = useState([])

  return (
    <div>
      <AdultRideDetails ride={ride} setRide={setRide} />
    </div>
  )
}

export default AdultDetailsPage
