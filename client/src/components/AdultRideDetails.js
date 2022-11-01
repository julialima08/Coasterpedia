import axios from "axios"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
function AdultRideDetails({ ride, setRide }) {

    let { id } = useParams()
    const getRideById = async () => {
        let response = await axios.get(`http://localhost:3001/api/adults/${id}`)
        console.log(response.data)
        setRide(response.data)
    }
    let navigate = useNavigate()
    const deleteRide = async () => {
        await axios.delete(`http://localhost:3001/api/adults/${id}`)
        navigate('/adults')
    }
    useEffect(() => {
        getRideById()
    }, [])
    return (
        <div className="AdultRideDetails">
            {ride.adult && (
                <>
                    <img src={ride.adult.image}></img>
                    <h2>{ride.adult.name}</h2>
                    <h3>Description: {ride.adult.description}</h3>
                    <h4>Year Made: {ride.adult.year}</h4>
                    <h4>History: {ride.adult.history}</h4>
                    <h4>Park Location: {ride.adult.parkLocation}</h4>
                    <h4>Height: {ride.adult.height}</h4>
                    <h4>Capacity: {ride.adult.capacity}</h4>
                    <h4>FlashPass: {ride.adult.flashPass}</h4>
                    <h4>Price: {ride.adult.rideFee}</h4>
                    <h4>Rating: {ride.adult.rating}</h4>
                    <button onClick={deleteRide}  > delete ride</button >
                </>
            )}

        </div>
    )
}

export default AdultRideDetails