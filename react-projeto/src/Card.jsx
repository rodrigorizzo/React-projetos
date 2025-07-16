import cardPic from './assets/react.svg'

function Card() {

    return (
        <div className="card">
            <img src={cardPic} alt="Imagem exemplo"></img>
            <h2>Card Título</h2>
            <p>Este é um exemplo de card que pode ser reutilizado quantas vezes quiser.</p>
        </div>
    );
}

export default Card