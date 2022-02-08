import evren from "../imagenes/evren.png"
import banner from "../imagenes/banner-tablet.jpg"
import styles from "../styles/Home.module.css"
import Navbar from "./Navbar"
import Footer from "./Footer"


const Home = () =>{
    return(
        <div className={styles.homesection}>
            <Navbar/>
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
        <Footer/>
        </div>
    )
    
}

export default Home