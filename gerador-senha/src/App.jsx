import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [senha, setSenha] = useState(0);
  const [quant, setQuant] = useState(10);
  const [numeros, setNumeros] = useState(false);
  const [caracteres, setCaracteres] = useState(false);

  let senhaRef = useRef(null);

  const gerarSenha = useCallback(() => {
    let novaSenha = "";

    let str = "AaBbCcDdEeFfGgHhIiJjLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    if (numeros) str += "0123456789";
    if (caracteres) str += "@#$%&*!";

    for (let i = 0; i < quant; i++) {
      const index = Math.floor(Math.random() * str.length);
      novaSenha += str.charAt(index);
    }

    setSenha(novaSenha);
  }, [quant, numeros, caracteres]);

  const copiarSenha = () => {
    window.navigator.clipboard.writeText(senha);
    senhaRef.current?.select();
  }

  useEffect(() => {
    gerarSenha();
  }, [quant, numeros, caracteres]);

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
          value={senha}
          ref={senhaRef}
          readOnly
        />
        <button
          onClick={copiarSenha}
          className="bg-blue-900 text-white inline-block p-2"
        >
          copiar
        </button>
      </div>
      <div className="flex flex-wrap gap-1">
        <label className="whitespace-nowrap" htmlFor="">
          <input
            type="range"
            name=""
            id=""
            value={quant}
            min={4}
            max={16}
            onChange={(e) => setQuant(e.target.value)}
          />
          {quant}
        </label>
        <label className="whitespace-nowrap">
          <input
            className="whitespace-nowrap"
            type="checkbox"
            onChange={() => setNumeros((anterior) => !anterior)}
            name=""
            id=""
          />{" "}
          Números
        </label>
        <label className="whitespace-nowrap">
          <input
            type="checkbox"
            onChange={() => setCaracteres((anterior) => !anterior)}
            name=""
            id=""
          />{" "}
          Caracteres especiais
        </label>
      </div>
    </div>
  );
}

export default App;
