import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-3 w-fit bg-gray-200 p-5 m-auto">
      <h1 className="text-3xl text-center font-bold">Gerador de Senhas</h1>
      <div className="">
        <input
          className="bg-blue-200 inline-block p-2"
          type="text"
          name=""
          id=""
          placeholder="senha-aleatoria"
        />
        <button className="bg-blue-900 text-white inline-block p-2">copiar</button>
      </div>
      <div className="flex flex-wrap gap-1">
        <label className="whitespace-nowrap" htmlFor="">
          <input  type="range" name="" id="" /> 
        </label>
        <label className="whitespace-nowrap">
          <input className="whitespace-nowrap"type="checkbox" name="" id="" /> Números
        </label>
        <label className="whitespace-nowrap">
          <input type="checkbox" name="" id="" /> Caracteres especiais
        </label>
      </div>
    </div>
  );
}

export default App;
