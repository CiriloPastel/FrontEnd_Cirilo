import "./style.css";
import progressBar3 from "../../imagens/progressBar3.png";
import ciriloPasso3 from "../../imagens/ciriloPasso3.png";
function Passo3Pedido() {
  return (
    <div className="container">
      <div className="top">
        <img id="progressBar" src={progressBar3} alt="" />
      </div>
      <div className="container2">
        <main>
          <div className="text">
            <h1>Seu pedido foi feito com sucesso!</h1>
            <p>Você pode receber seu pedido aqui: picpayué</p>
            <p>Você receberá uma notificação quando o pedido for entregue.</p>
          </div>
            <button id="return">Voltar para tela inicial</button>
          <div className="bottom">
            <img id="ciriloImg" src={ciriloPasso3} alt="" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Passo3Pedido;
