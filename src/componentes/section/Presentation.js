import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, Eu sou Kelvin Jean!</h1>
            <p>Desenvolvedor Front-end com experiência em React.js,JavaScript, TypeScript,HTML e CSS<br></br> Apaixonado pelo desenvolvimento de componentes reutilizáveis.<br></br>Formado em Análise e Desenvolvimento de Sistemas e cursando Especialização em Tecnologia na Escola DNC</p>
            <ButtonA text='Conecte-se Comigo!' link='https://github.com/kelvinjp1999'></ButtonA>
        </div>
    )
}

export default Presentation