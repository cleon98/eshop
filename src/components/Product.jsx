import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Product.module.css"



export const Product = (props) => {
    const {id, category, description, price, img} = props
  return( 
    
<Link to={`/productos/${id}`}>
  <section className={styles.listOfProducts}>
      <img className={styles.infoProduct} alt="pictures of the products" src={img}/>
      <h2 className={styles.infoProduct}>{category}</h2>
      <p className={styles.infoProduct}>{description}</p>
      <h3 className={styles.infoProduct}>{price}</h3>
  </section>
  
</Link>
  )
};

export default Product;
