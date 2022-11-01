import AdultRideDetails from "../components/AdultRideDetails"
import { useState } from "react"

const AdultDetailsPage = () => {
    const [ride, setRide] = useState([])

    return <div>
        <h1>hello</h1>
        <AdultRideDetails
            ride={ride}
            setRide={setRide} />
    </div >
}

export default AdultDetailsPage