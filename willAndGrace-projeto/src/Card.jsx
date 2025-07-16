import React, {useState} from "react";

function Card(props) {
  const [visibilidadeResposta, setVisibilidadeResposta] = useState(false);
  
  const mostrarResposta = () => {
    setVisibilidadeResposta(!visibilidadeResposta);
  }

    return (
    <div className="card">
      <h3>{props.pergunta}</h3>
      <button onClick={mostrarResposta}>
        {visibilidadeResposta ? "Ocultar" : "Mostrar"}
      </button>
      {visibilidadeResposta && <p>{props.resposta}</p>}
    </div>
  );
}

export default Card;
