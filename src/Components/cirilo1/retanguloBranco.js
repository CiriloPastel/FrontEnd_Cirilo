import './retanguloBranco.css'

function RetanguloBranco() {
    return(
    <div id="card1">
        <div id="container">
            <div id="top">  
                <h5>LOGIN</h5>
            </div>
            <div id="formulario">
                <form id='form' method='#'>
                    <p id='email'>Email <em id='asterisco'>*</em></p>
                    <input id='entrada' type='email'/>
                    <button id='botao' type='submit'>Entrar</button>
                    <p id='requisitEmail'>Se você ainda não tiver um e-mail cadastrado,
                requisite a um administrador</p>
                </form>
            </div>
        </div>
    </div>
    )
}
export default RetanguloBranco;