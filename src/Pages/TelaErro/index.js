import React from 'react';
import styles from './styles.css';
import pastelPensamento from '../../Assets/pastelPensamento.png'
import ciriloErro from '../../Assets/ciriloErro.png';

function ErroTela(){
    return(
        <div className={styles}>
            <div className = "moldura">
            <button class="botao-voltar"></button>
            <div id='titulo'>
                <h2>EITA ZAP!</h2>
            </div>
            <div id='erronio'>
                <div id='testiculo'>
                    <h3>Código de erro: 500</h3>
                    <h3 id="tente">Tente novamente :(/</h3>
                </div>
                <div id='cirilindo'>
                    <img id="balao" src={pastelPensamento} alt="tanana"/>
                    <img id="cirilo" src={ciriloErro} alt="tanana"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ErroTela