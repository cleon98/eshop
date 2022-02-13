import React from 'react';
import styles from "../styles/CartProduct.module.css"

export const CartProduct = (props) => {
    const {id, description, price, size, img} = props
  return( 
    
  <div className={styles.cardOfProduct}>
      <div className={styles.eachProductCart}>
      <img className={styles.infoProductImg} alt="pictures of the products" src={img}/>
      </div>
      <div className={styles.cartInformation}>
      <h2 className={styles.infoProduct}>{props.category}</h2>
      <p className={styles.infoProduct}>{description}</p>
      <h3 className={styles.infoProduct}>$ {price}</h3>
      <h3 className={styles.infoProduct}> Tamaño: {size}</h3>
      </div>
  </div>
  )
};

export default CartProduct;