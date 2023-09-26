

import cirilo from '../../Assets/Cirilo.png'
import './styles.css'
// import pastel1 from './imagens/1 pastel.png';
// import pastel2 from './imagens/2 pastel.png';

function MenuAdm(){
    return(
        <div id='menu'>
            <header>
                <h1>PEDIDOS</h1>
            </header>
            <ul>
            <li>
                <a classname="menuAdm" href="sabores">Sabores Selecionados</a>
            </li>
            <li>
                <a classname="menuAdm" href="part">Participantes</a>
            </li>
            </ul>
            <img className="ciriloConfuso" src={cirilo} alt='Cirilo'></img>
        </div>
    )
}

export default MenuAdm;