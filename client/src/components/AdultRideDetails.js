function adultRideDetails() {

    return (
        <div className="AdultRideDetails">
            <img src={props.image}></img>
            <h2>{props.name}</h2>
            <h3>Description: {props.description}</h3>
            <h4>Year Made: {props.year}</h4>
            <h4>Park Location: {props.parkLocation}</h4>
            <h4>Height: {props.height}</h4>
            <h4>Capacity: {props.capacity}</h4>
            <h4>FlashPass: {props.flashPass}</h4>
            <h4>Price: {props.rideFee}</h4>
            <h4>Thrill Level: {props.thrill}</h4>
            <h4>Rating: {props.rating}</h4>
        </div>
    )
}

export default adultRideDetails