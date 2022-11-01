const CreateChildRideForm = (props) => {
  return (
    <form className="form-list">
      <button className="submit">Submit</button>
      <input
        className="input"
        type="text"
        value={props.image}
        placeholder={'ride image'}
        name="rideImage"
      />
      <input
        className="input"
        type="text"
        value={props.name}
        placeholder={'ride name'}
        name="rideName"
      />
      <input
        className="input"
        type="text"
        value={props.description}
        placeholder={'ride description'}
        name="rideDescription"
      />
      <input
        className="input"
        type="text"
        value={props.height}
        placeholder={'ride height'}
        name="rideHeight"
      />
      <input
        className="input"
        type="text"
        value={props.capacity}
        placeholder={'ride capacity'}
        name="rideCapacity"
      />
      <input
        className="input"
        type="text"
        value={props.pass}
        placeholder={'is flash pass required?'}
        name="ridePass"
      />
      <input
        className="input"
        type="text"
        value={props.location}
        placeholder={'ride location'}
        name="rideLocation"
      />
      <input
        className="input"
        type="text"
        value={props.year}
        placeholder={'year made'}
        name="rideYear"
      />
      <input
        className="input"
        type="text"
        value={props.rating}
        placeholder={'ride rating'}
        name="rideRating"
      />
    </form>
  )
}

export default CreateChildRideForm
