import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from "../styles/OneProduct.module.css"
import GoToTop from '../components/onTop';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'

const OneProduct = () => {
    const {id} = useParams();

    const product = products.find(product => product.id ==  id);

    const  [cart, setCart] = useContext(CartContext);
    const addToCart = () =>{
        const item = {category: product.category, description: product.description, 
        price: product.price, size: product.size, key: product.id, img:product.img} 
        setCart(current => [...current, {...item}]);
        console.log(item)
    
    }
   
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
      <h3 className={styles.productText}>Talla:<br/> </h3> {product.size.map((size, index) =>(
          <button className={styles.buttonSizes} value={size} key={index}>{size}</button>
      ))}
      <h3 className={styles.productText}>Color:<br/>{product.color}</h3>
  </div>
  </div>
  <div className={styles.buttons}>
      <button className={styles.buttonOneProduct} onClick={addToCart}> Añadelo a tu carrito</button>
      <Link className={styles.linkCart} to="/cart"><button className={styles.buttonGoCart}> Ve al carrito</button></Link>
  </div>
  <GoToTop/>
  <Footer/>
  </div>
  )
};

export default OneProduct;