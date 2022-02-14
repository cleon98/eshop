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
      {products.map((item, index)=>(
          <Product id={item.id} 
          category={item.category} 
          description={item.description} 
          price={item.price} 
          size={item.size} 
          color={item.color} 
          item={item} 
          gender={item.gender} 
          img={item.img}
          key={index}/>

      ))}
      </section>
      <Footer/>
  </div>

  )
};

export default Products;

