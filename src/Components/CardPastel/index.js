import "./styles.css";
import BotaoAdd from "../../imagens/botaoAdd.png";
import pastelCard from "../../imagens/pastelCard.png";

function CardPastel() {
  return (
    <div className="container">
      <div className="background">
        <h5>Pastel de Carne</h5>
        <div className="imgdiv">
          <img id="imgpastel" src={pastelCard} alt="" />
          <p id="preco">R$10,90</p>
        </div>
      </div>
      <div className="buttons">
        <button className="detalhes">Ver detalhes</button>
        <button id="mais">+</button>
      </div>
    </div>
  );
}

export default CardPastel;
