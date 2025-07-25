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
  };

  useEffect(() => {
    gerarSenha();
  }, [quant, numeros, caracteres]);

  return (
    <div className="flex flex-col gap-12 w-fit  bg-indigo-800 p-5 rounded">
      <h1 className="text-white text-4xl text-center font-extrabold">Gerador de Senhas</h1>
      <div className="flex rounded overflow-hidden">
        <input
          className="bg-white border border-gray-200 inline-block p-2 flex-grow"
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
          className="bg-gray-500 text-white inline-block p-2 cursor-pointer"
        >
          copiar
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        <input
          className="cursor-pointer"
          type="range"
          name=""
          id=""
          value={quant}
          min={4}
          max={16}
          onChange={(e) => setQuant(e.target.value)}
          title={`Tamanho da senha: ${quant}`}
        />
        <label className="whitespace-nowrap" htmlFor=""></label>
        <label className="whitespace-nowrap cursor-pointer">
          <input
            className="whitespace-nowrap"
            type="checkbox"
            onChange={() => setNumeros((anterior) => !anterior)}
            name=""
            id=""
          />{" "}
          Números
        </label>
        <label className="whitespace-nowrap cursor-pointer">
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
