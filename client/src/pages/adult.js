import { useEffect, useState } from 'react'
import axios from 'axios'
import RollerCoasterCard from '../components/RollerCoasterCard'
import { useNavigate } from 'react-router-dom'


const Adult = () => {
    const [rides, setRides] = useState([])


    const getAdultRide = async () => {
        try {
            let response = await axios.get('http://localhost:3001/api/adults')
            console.log(response.data.adults)
            setRides(response.data.adults)
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAdultRide()
    }, []
    )

    let navigate = useNavigate()
    const getRideDetails = (id) => {
        navigate(`/adultRideDetails/${id}`)
    }
    return (
        <div>
            <h1>adult</h1>
            {rides.map((ride) => (
                <div key={ride._id} onClick={() => getRideDetails(ride._id)}>
                    <RollerCoasterCard
                        image={ride.image}
                        name={ride.name} />
                </div>)

            )}
        </div>)
}

export default Adult
