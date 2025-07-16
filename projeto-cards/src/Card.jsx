

function Card(props) {

    return(
        <div className="bg-gray-300 p-3 inline-block box-border">
            <img src="https://placehold.co/600x400" alt="" />
            <h2 className="text-2xl">{props.titulo}</h2>
            <p>{props.texto}</p>
            <button className="bg-amber-500 p-2 rounded">Click</button>
        </div>
    )
}

export default Card