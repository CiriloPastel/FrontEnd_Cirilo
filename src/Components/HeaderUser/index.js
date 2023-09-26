import React from 'react';
import './styles.css'
import DelfosLogo from '../../Assets/DelfosLogo2.svg';

function HeaderUser() {
  return (
        <header>
        <img src={DelfosLogo} alt="logo" className='img-header'/>
        <button class="botao-carrinho"></button>
        </header>
  );
}

export default HeaderUser;