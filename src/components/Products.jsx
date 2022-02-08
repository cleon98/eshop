import React from 'react';
import logo from "../imagenes/logo.png"
import Footer from './Footer';
import { products } from '../data';
import Navbar from './Navbar';
import Product from './Product';
import styles from "../styles/Products.module.css"
import { Link } from 'react-router-dom';
// import { eachProduct } from '../Api';
// import Product from './Product';


const Products = () => {
  return(
  <div >
      <Navbar/>
      <section className={styles.infoCatalog}>
      <h1>Catálogo</h1>
      </section>
      <section className={styles.categories}>
      <section className={styles.webDesign}>
          <ul>Hombre
              <li>Accesorios</li>
              <li>Camisetas</li>
              <li>Sudaderas</li>
          </ul>
          <Link to="/" className={styles.logoCatalog}><img src={logo} className={styles.logoCatalog} alt="Website logo"/></Link>
        <ul>Mujer
            <li>Accesorios</li>
            <li>Camisetas</li>
            <li>Sudaderas</li>

        </ul>
        </section>
      <section className={styles.allProducts} >
      {products.map(({id, category, description, price, size, color, gender, img})=>(
          <Product id={id} category={category} description={description} price={price} 
          size={size} color={color} gender={gender} img={img} key={id}/>
          
          
      ))}
      </section>
      </section>
      <Footer/>
  </div>

  )
};

export default Products;

