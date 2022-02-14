import React, {useContext} from 'react';
import styles from "../styles/CartProduct.module.css"
import { CartContext } from '../CartContext'

export const CartProduct = (props) => {
    const { description, price, size, category, img, id} = props

    const  [cart, setCart] = useContext(CartContext);

    const removeProduct = (id) => {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    };
  
  return( 
    
  <div className={styles.cardOfProduct}>
      <div className={styles.eachProductCart}>
      <img className={styles.infoProductImg} alt="pictures of the products" src={img}/>
      </div>
      <div className={styles.cartInformation}>
      <h2 className={styles.infoProduct}>{category}</h2>
      <p className={styles.infoProduct}>{description}</p>
      <h3 className={styles.infoProduct}>$ {price}</h3>
      <h3 className={styles.infoProduct}> Tamaño: {size}</h3>
      <button onClick={()=>removeProduct(cart.id)} className={styles.buttonRemove}>Eliminar producto</button>
      </div>
  </div>
  )
};

export default CartProduct;