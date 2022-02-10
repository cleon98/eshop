import evren from "../imagenes/evren.png"
import banner from "../imagenes/banner-tablet.jpg"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"


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
            <Link to="/productos/hombre"><button className={styles.button1}>Hombre</button></Link>
           <Link to="/productos/mujer"> <button className={styles.button2}>Mujer</button></Link>
            {/* </div> */}
        </article>
        <Footer/>
        </div>
    )
    
}

export default Home