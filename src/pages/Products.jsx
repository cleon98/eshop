import React from 'react';
import Footer from '../components/Footer';
import { products } from '../data';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import styles from "../styles/Products.module.css"

const Products = () => {
  return(
  <div >
      <Navbar/>
      <section className={styles.infoCatalog}>
      <h1>Catálogo</h1>
      </section>
      <section className={styles.allProducts} >
      {products.map(({id, category, description, price, size, color, gender, img})=>(
          <Product id={id} category={category} description={description} price={price} 
          size={size} color={color} gender={gender} img={img} key={id}/>

      ))}
      </section>
      <Footer/>
  </div>

  )
};

export default Products;

