import React from 'react';
import logo from "../imagenes/logo.png"
import cart from "../imagenes/cart.png"
import styles from "../styles/Navbar.module.css"

const navbar = () => {
  return <div>
                  <nav>
            <img src={logo} className={styles.logo} alt="Website logo"/>
            <ul  className={styles.list}>
                <li>Hombre</li>
                <li>Mujer</li>
            </ul>
            <img src={cart} className={styles.cart} alt="Shopping cart" />
        </nav>
  </div>;
};

export default navbar;
