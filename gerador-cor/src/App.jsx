import { useState } from "react";

function App() {
  const [hexCor, setHexCor] = useState("#660000");
  const [corNeutra, setCorNeutra] = useState("#1a1a1a");

  const mudarhexCor = () => {
    const numeroCor = Math.floor(Math.random() * 16777215);
    
    setCorNeutra(
      numeroCor < 10000000 ? "#f9f9f9" : "#1a1a1a"
    );

    const novaCor = "#" + numeroCor.toString(16).padStart(6, "0").toUpperCase();
    setHexCor(novaCor);
  };

  return (
    <div className="container" style={{ backgroundColor: hexCor }}>
      <h1 style={{ color: corNeutra }}>Gerador de cor</h1>
      <p className="codigoCor" style={{ backgroundColor: corNeutra, color: hexCor }}>
        {hexCor}
      </p>
      <button onClick={mudarhexCor}>Trocar cor</button>
    </div>
  );
}

export default App;
