import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext'
import CartProduct from '../components/CartProduct';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from "../styles/ShoppingCart.module.css"


const ShoppingCart = (props) => {

  const  [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((accumulate, current) => accumulate + current.price, 0) 

 console.log(cart)

  return (
    <div>
      <Navbar/>
      <div className={styles.cartBody}>
        <h1 className={styles.shoppingCartTitle}>Tu carrito de compras: </h1>
      </div>
      <div className={styles.cartConditional}>   
        {cart.length === 0 && <div className={styles.cartConditional1}>Tu carrito esta vacio.</div>}    
      </div>
      <section>
      {cart.map((item, index)=>(
          <CartProduct id={item.id} 
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
      <div className={styles.totalPrice}>Precio total: $ {totalPrice} </div>
        <div className={styles.buttonsCart}>
      <button className={styles.buttonBuying}>Realizar tu pedido</button>
      <Link className={styles.backToShop} to="/productos"><button className={styles.buttonBuying}>Volver a la tienda</button></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default ShoppingCart