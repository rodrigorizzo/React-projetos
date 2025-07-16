import Card from "./Card.jsx";

function App() {
  const curioWG = [
    {
      pergunta: "Qual o nome completo de Will Truman?",
      resposta: "William Truman Jr.",
    },
    {
      pergunta: "Qual a profissão de Will?",
      resposta: "Advogado.",
    },
    {
      pergunta: "Qual o nome completo de Grace Adler?",
      resposta: "Grace Elizabeth Adler.",
    },
    {
      pergunta: "Qual a profissão de Grace?",
      resposta: "Designer de interiores.",
    },
    {
      pergunta: "Qual a nacionalidade de Karen Walker?",
      resposta:
        "Americana, embora muitas vezes ela se refira à sua herança húngara e à sua fortuna.",
    },
    {
      pergunta: "Qual o nome do marido de Karen?",
      resposta: "Stanley Walker (embora ele raramente apareça na tela).",
    },
    {
      pergunta: "Qual a profissão de Jack McFarland?",
      resposta:
        "Ao longo da série, Jack tem várias ocupações, incluindo ator, enfermeiro e professor de teatro gay.",
    },
    {
      pergunta: "Qual o nome da gata de Grace?",
      resposta:
        "Grace não tem uma gata de estimação na série principal, mas um cachorro chamado 'Otto' aparece em um episódio.",
    },
    {
      pergunta: "Qual o nome do café favorito de Will e Grace?",
      resposta: "The Palace.",
    },
    {
      pergunta: "Em qual cidade a série se passa?",
      resposta: "Nova York.",
    },
    {
      pergunta: "Quantas temporadas originais a série teve?",
      resposta: "Oito temporadas (1998-2006).",
    },
    {
      pergunta: "A série teve um revival? Se sim, quando e quantas temporadas?",
      resposta:
        "Sim, teve um revival que foi ao ar de 2017 a 2020, com mais três temporadas.",
    },
    {
      pergunta: "Quem interpretou a mãe de Will, Marilyn?",
      resposta: "Blythe Danner.",
    },
    {
      pergunta: "Quem interpretou o pai de Grace, Martin?",
      resposta: "Alan Arkin.",
    },
    {
      pergunta:
        "Qual ator convidado famoso interpretou o papel de 'Beverley Leslie'?",
      resposta: "Leslie Jordan.",
    },
  ];

  return (
    <div className="container">
      <div>
        <h1>Quiz Will & Grace</h1>
        <div className="lista">
          {curioWG.map((curiosidade) => (
            <Card
              pergunta={curiosidade.pergunta}
              resposta={curiosidade.resposta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
