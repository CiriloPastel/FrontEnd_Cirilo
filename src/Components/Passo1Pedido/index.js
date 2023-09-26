import "./style.css";
import progressBar1 from "../../imagens/progessBar1.png";
import qrcode from "../../imagens/qrCodeTeste.png";
function Passo1Pedido() {
  return (
    <div className="container">
      <div id="top">
        <img id="progressBar" src={progressBar1} alt="" />
      </div>
      <div className="main">
        <div className="container1">
          <div className="card1">
            <h2 id="title">Pague por PIX ou através do QR code pelo PicPay!</h2>
            <img id="qrcode" src={qrcode} alt="" />
          </div>
          <div className="card">
            <p id="total">Total - R$20,00</p>
            <p id="destinatario">Você está pagando para: fulano de tal</p>
            <p id="chavePix">
              Copiar Pix: <span id="pix">Linkbemlegal1234</span>
            </p>
          </div>
        </div>
        <div className="downdiv2">
          <button id="fail">Cancelar compra</button>
          <button id="sucess">Fiz o pagamento</button>
        </div>
      </div>
    </div>
  );
}

export default Passo1Pedido;
