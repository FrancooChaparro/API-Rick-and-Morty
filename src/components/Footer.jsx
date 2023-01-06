import React from 'react';
import styles from "../stylesheets/Footer.module.css";
import { useSelector } from 'react-redux';
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";



export default function Footer  ()  {
    let DarkMode = useSelector((state) => state.dark) 
return (
        <div className={ DarkMode ? styles.Footer : styles.FooterDark} >
            <div className={DarkMode ? styles.DivIcons : styles.DivIconsDark}>
                <a href="mailto:francoo_chaparro@hotmail.com" rel="noopener noreferrer" target="_blank"><SiGmail className={DarkMode ? styles.iconosFooter: styles.iconosFooterDark } /></a>
                <a href="https://github.com/FrancooChaparro" rel="noopener noreferrer" target="_blank"><SiGithub className={DarkMode ? styles.iconosFooter: styles.iconosFooterDark}/></a>
                <a href="https://www.linkedin.com/in/franco-chaparro-134743252/" rel="noopener noreferrer" target="_blank"><SiLinkedin className={DarkMode ? styles.iconosFooter : styles.iconosFooterDark}/></a>
            </div>
            <div>
                <h5 className={DarkMode ? styles.tituloFooter : styles.tituloFooterDark }>By Franco Chaparro</h5>
            </div>
        </div>
    )
}

