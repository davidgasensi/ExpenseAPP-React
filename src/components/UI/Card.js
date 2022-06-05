import './Card.css'

function Card(props) {
    const classes= 'card ' + props.className;
    return <div className={classes}>{props.children}</div>; // children es una variable reservada y su funcion es ser el main content entre etiquetas representa generic boxes

}

export default Card;