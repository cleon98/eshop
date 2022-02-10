import React from 'react';
import logo from "../imagenes/logo.png"
import cart from "../imagenes/cart.png"
import styles from "../styles/Navbar.module.css"
import { Link } from 'react-router-dom';

const navbar = () => {
  return <div>
        <nav>
           <Link to="/"><img src={logo} className={styles.logo} alt="Website logo"/></Link>
            <ul  className={styles.list}>
                <li><Link to="/productos">Catálogo</Link></li>
                <li><Link to="/productos/hombre">Hombre</Link></li>
                <li><Link to="/productos/mujer">Mujer</Link></li>
            </ul>
           <Link to="/cart"><img src={cart} className={styles.cart} alt="Shopping cart" /></Link> 
        </nav>
  </div>;
};

export default navbar;
