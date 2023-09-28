import React from 'react';
import imgLogin from '../../Assets/Frame121.png'
import imgPastel from '../../Assets/1pastel.png'
import './styles.css'; 
import RetanguloBranco from '../../Components/RetanguloBranco/index.js';

function Login() {
  return (
        <div className='FundoAmarelo'>
        <div id="card">
          <p className="Parg1">Olá, <br></br> bem-vindo(a) ao</p>
            <div className="divCirilo">
              <h1 className='LoginCirilo'>CIRIL</h1>
              <img className='ImagemCiri' src={imgLogin} alt='ImagemCiri' />
            </div>
          <img className='pastel' src={imgPastel} alt="Imagem do pastel"></img>
          <p className='Parg2'>Facilitando a sua vida <br></br> para pedir <a className='pastelColorido'>pastel</a></p>
        </div>
        <RetanguloBranco/>
      </div>
      
  );
}

export default Login;
