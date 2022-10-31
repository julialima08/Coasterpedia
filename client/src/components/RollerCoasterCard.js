function RollerCoasterCard(props) {
    return (<div className="rollerCoasterCard" key={props.name}>
        < img src={props.image}></img>
        <h2>{props.name}</h2>
    </div>)
}


export default RollerCoasterCard