import React from 'react';
import insta from "../imagenes/insta.png"
import whats from "../imagenes/whatsapp.png"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return <div>
      <footer>
            <h3 className={styles.title}>EVREN HIGH</h3>
            <p className={styles.mark}>Marca 100% colombiana</p>
            <h3 className={styles.contact}>Contacto</h3>
            <p className={styles.number}>+57 302 8312 876</p>
            <h3 className={styles.social}>Redes sociales</h3>
            <div className={styles.socialmedia}>
                <img src={insta} alt="Redirect to website insta" />
                <img src={whats} alt="Redirect to whatsapp" />
            </div>
            <h3 className={styles.owner}>Sitio web diseñado por: Cristian <span className={styles.lastName}>Leon</span></h3>
        </footer>
  </div>;
};

export default Footer;
