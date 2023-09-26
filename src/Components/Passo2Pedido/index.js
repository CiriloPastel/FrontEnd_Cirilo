import "./style.css";
import progressBar2 from "../../imagens/progressBar2.png";
import fixarComp from "../../imagens/fixComp.png";
function Passo2Pedido() {
  return (
    <div className="container">
      <div id="top">
        <img id="progressBar" src={progressBar2} alt="" />
      </div>
      
      <div className="container2">
          <div className="main">
            <h1>Coloque o comprovante do pagamento</h1>
            <div id="fix" >
                <img src={fixarComp} alt="" />
                <p id="fixComprovante" >Fixar comprovante</p>
            </div>
            <div id="buttons" >
                <button id="fail" >Finalizar sem comprovante</button>
                <button id="sucess">Enviar</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Passo2Pedido;
