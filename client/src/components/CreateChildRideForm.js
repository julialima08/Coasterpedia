import { useState } from 'react'
import '../CSS/popUp.css'

const CreateChildRideForm = (props) => {
  const [popUp, setPopUp] = useState(false)

  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  if (popUp) {
    document.body.classList.add('active-popUp')
  } else {
    document.body.classList.remove('active-popUp')
  }

  const handleSubmit = async (e) => {
    await props.addRide(e)
    togglePopUp()
  }

  return (
    <>
      <div className="buttonHolder">
        <button onClick={togglePopUp} className="btn-popUp">
          Add new ride
        </button>
      </div>

      {popUp && (
        <div className="popUp">
          <div onClick={togglePopUp} className="overlay"></div>
          <div className="popUp-content">
            <button className="close-popUp" onClick={togglePopUp}>
              CLOSE
            </button>
            <form onSubmit={handleSubmit} className="form-list">
              <input
                className="input"
                type="text"
                value={props.newRide.image}
                placeholder={'ride image'}
                name="image"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.name}
                placeholder={'ride name'}
                name="name"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.description}
                placeholder={'ride description'}
                name="description"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.height}
                placeholder={'ride height'}
                name="height"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.capacity}
                placeholder={'ride capacity'}
                name="capacity"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.flashPass}
                placeholder={'is flash pass required?'}
                name="flashPass"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.parkLocation}
                placeholder={'ride location'}
                name="parkLocation"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.year}
                placeholder={'year made'}
                name="year"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.history}
                placeholder={'history'}
                name="history"
                onChange={props.handleChange}
              />
              <input
                className="input"
                type="text"
                value={props.newRide.rating}
                placeholder={'ride rating'}
                name="rating"
                onChange={props.handleChange}
              />
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateChildRideForm
