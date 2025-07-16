import { useState } from "react";
import "./App.css";

function App() {
  let [id, setId] = useState(28);

  const trocarImagem = (num) => {
    setId(id + num);
  };

  return (
    <div>
      <img src={`https://picsum.photos/id/${id}/300`}></img>
      <button onClick={() => trocarImagem(-1)}>Anterior</button>
      <button onClick={() => trocarImagem(1)}>Próximo</button>
    </div>
  );
}

export default App;
