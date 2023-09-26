/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import carrinhoImg from "../../imagens/carrinhoPreto.png";

function FinalizaPedido() {
  return (
    <div id="containerPED">
      <div className="main">
        <div className="top">
          <div id="left">
            <img src={carrinhoImg} alt="carrinho" id="carrinhoImgCP" />
            <p>Carrinho de Compras</p>
          </div>
          <a href="#">
            <button>Finalizar compra</button>
          </a>
        </div>
        <div className="agrpPasteis">
          <div className="pasteis">
            <p>Pastel de queijo</p>
            <div id="maxmin">
              <button>+</button>
              <button>-</button>
            </div>
            <p>1 Un.</p>
            <div>
              <p>Total. R$10,00</p>
            </div>
          </div>
        </div>
        <div id="downdiv">
          <p>1 unidade</p>
          <p>Total a pagar: R$10,00</p>
        </div>
      </div>
    </div>
  );
}

export default FinalizaPedido;
