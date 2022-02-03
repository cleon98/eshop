import logo from "../imagenes/logo.png"
import cart from "../imagenes/cart.png"
import evren from "../imagenes/evren.png"
import banner from "../imagenes/banner-tablet.jpg"
import styles from "../components/Home.module.css"
import insta from "../imagenes/insta.png"
import whats from "../imagenes/whatsapp.png"

const Home = () =>{
    return(
        <div className={styles.homesection}>
            <nav>
            <img src={logo} className={styles.logo} alt="Website logo"/>
            <ul  className={styles.list}>
                <li>Hombre</li>
                <li>Mujer</li>
            </ul>
            <img src={cart} className={styles.cart} alt="Shopping cart" />
        </nav>
        <header className={styles.header}>
            <img src={evren} className={styles.moto} alt="Store moto" />
        </header>
        <article>
            <img src={banner} className={styles.banner} alt="Banner of the site" />
            {/* <div className={styles.buttons}> */}
            <button className={styles.button1}>Hombre</button>
            <button className={styles.button2}>Mujer</button>
            {/* </div> */}
        </article>
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
        </div>
    )
    
}

export default Home