import styles from './Footer.module.css'
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/kelvinperosa.kp/'><FaInstagram size={30}></FaInstagram></a></li>
                <li><a href='https://www.linkedin.com/in/kelvin-jean-perosa-5191ba297/'><FaLinkedin size={30}></FaLinkedin></a></li>
                <li><a href='https://github.com/kelvinjp1999'><FaGithub size={30}></FaGithub></a></li>
            </ul>
            <p>Kelvinjean1999@gmail.com</p>
            <p>Kelvin Jean Perosa © 2023</p>
        </div>
    )
}

export default Footer