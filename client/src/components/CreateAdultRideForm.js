function createdAdultCoaster(props) {
    return (

        <form className="form-list" key={props.name}>
            <button onSubmit={handleSubmit}>Submit</button>
            <input
                className="input"
                type="text"
                value={props.name}
                placeholder={'ride name'}
                name='rideName'
            />
            <input
                className="input"
                type="text"
                value={props.image}
                placeholder={'ride image'}
                name='rideImage'
            />
            <input
                className="input"
                type="text"
                value={props.description}
                placeholder={'ride description'}
                name='rideDescription'
            />
            <input
                className="input"
                type="text"
                value={props.height}
                placeholder={'ride height'}
                name='rideHeight'
            />
            <input
                className="input"
                type="text"
                value={props.speed}
                placeholder={'ride speed'}
                name='rideSpeed'
            />
            <input
                className="input"
                type="text"
                value={props.capacity}
                placeholder={'ride capacity'}
                name='rideCapacity'
            />
            <input
                className="input"
                type="text"
                value={props.pass}
                placeholder={'what pass is needed?'}
                name='rideName'
            />
            <input
                className="input"
                type="text"
                value={props.location}
                placeholder={'ride location'}
                name='rideLocation'
            />
            <input
                className="input"
                type="text"
                value={props.year}
                placeholder={'year made'}
                name='rideYear'
            />
            <input
                className="input"
                type="text"
                value={props.fee}
                placeholder={'ride price'}
                name='rideFee'
            />
        </form>)
}


export default createdAdultCoaster