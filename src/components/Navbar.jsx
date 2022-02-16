import React from 'react';
import logo from "../imagenes/logo.png"
import cart from "../imagenes/cart.png"
import styles from "../styles/Navbar.module.css"
import toggleMenu from "../imagenes/toggleMenu.png"
import { Link } from 'react-router-dom';

const navbar = () => {
  return( 
  <div className={styles.navBar}>
        
           <Link to="/"><img src={logo} className={styles.logo} alt="Website logo"/></Link>

          <div className={styles.navElements}>  
          <div className={styles.textNav} >         
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle"></input> 
             <nav className={styles.categories}>
                <Link to="/productos">Catálogo</Link>
                <Link to="/productos/hombre">Hombre</Link>
                <Link to="/productos/mujer">Mujer</Link>
           </nav>
           </div>   
           <Link to="/cart"><img src={cart} className={styles.cart} alt="Shopping cart" /></Link> 
          </div>
        
  </div>
  )
};

export default navbar;
