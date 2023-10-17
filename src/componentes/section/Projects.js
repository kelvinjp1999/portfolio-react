import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../../componentes/elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects(){
    return(
        <div id='Projects' className={styles.projects}>
            <h1>Projetos</h1>
            <Card img={lpdnc}
                title='LP - DNC'
                tech='HTML,CSS,JS'
                description='Desenvolvimento de uma landindg page para o lançamento da formação em tecnologia'
                repo='https://github.com/kelvinjp1999/projeto-landing-page'
                site='https://github.com/kelvinjp1999/projeto-landing-page'></Card>

            <Card img={portfolio}
                title='Portfolio'
                tech='HTML,CSS,JS e REACT'
                description='Desenvolvimento de uma landindg page para o lançamento da formação em tecnologia'
                repo='https://github.com/kelvinjp1999/projeto-landing-page'
                site='https://github.com/kelvinjp1999/projeto-landing-page'></Card>
            
            <ButtonB text='Acessar Repositório Completo' link='https://github.com/kelvinjp1999?tab=repositories' className='botao'></ButtonB>
        </div>
    )
}

export default Projects