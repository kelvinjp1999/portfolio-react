import styles from '../elements/Card.module.css'
import ButtonB from './ButtonB'


function Card({img,title,tech,description,repo,site}){
    return(
        <div className={styles.card}>
            <a href={site}>
            <img src={img} alt="Erro"></img>
            </a>
            
            <div>
                <h3>{title}</h3>
                <p><strong>Tecnologia: {tech}</strong></p>
                <p>{description}</p>
                <ButtonB text='Acesse o Repositorio' link={repo}></ButtonB>
            </div>
        </div>
    )
}

export default Card