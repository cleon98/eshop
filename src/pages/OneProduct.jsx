import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from "../styles/OneProduct.module.css"
import GoToTop from '../components/onTop';


const OneProduct = () => {
    const {id} = useParams();

    const product = products.find(product => product.id ==  id);

  return (
      <div>
      <Navbar/>
  <div className={styles.eachProduct}> 
  <div className= {styles.eachImage}>
      <img className={styles.productImg} src={product.img} alt="Each product that is sold in the store" />
  </div >
  <div className={styles.infoProductBox}>
      <h2 className={styles.productText}>{product.category}</h2>
      <p className={styles.productText}>{product.description}</p>
      <h3 className={styles.productText}>$ {product.price}</h3>
      <h3 className={styles.productText}>Talla:<br/> {product.size}</h3>
      <h3 className={styles.productText}>Color:<br/>{product.color}</h3>
  </div>
  </div>
  <div className={styles.buttonAdd}>
      <button className={styles.buttonOneProduct}> Añadelo a tu carrito</button>
  </div>
  <GoToTop/>
  <Footer/>
  </div>
  )
};

export default OneProduct;