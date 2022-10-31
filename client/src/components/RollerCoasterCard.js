function cardForm(props) {
    return (<div className="form-list" key={props.name}>
        <h1>{props.image}</h1>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <h3>{props.height}</h3>
        <h3>{props.speed}</h3>
        <h3>{props.capacity}</h3>
        <h3>{props.pass}</h3>
    </div>)
}


export default cardForm