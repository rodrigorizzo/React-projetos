import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [id, setId] = useState(0);
  let [info, setInfo] = useState({});

  const fetchInfo = useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInfo(res);
      });
  }, [id]);

  const trocarImagem = (num) => {
    setId(id + num);
    fetchInfo;
  };

  return (
    <div>
      <div>
        <button onClick={() => trocarImagem(-1)}> &#65308; </button>
        <figure>
          <img src={`https://picsum.photos/id/${id}/300`}></img>
          <figcaption>{info.author}</figcaption>
        </figure>
        <button onClick={() => trocarImagem(1)}> &#xFF1E; </button>
      </div>
      <div>
        <button>Print</button>
      </div>
    </div>
  );
}

export default App;
