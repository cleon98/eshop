import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/ListWomen.module.css"

const ListWomen = (props) => {
    const {id, category, description, price, img} = props
  return (
    <Link to={`/productos/${id}`}>
  <section className={styles.eachWomen}>
      <img  alt="pictures of the products section women" src={img}/>
      <h2 className={styles.infoProduct}>{category}</h2>
      <p className={styles.infoProduct}>{description}</p>
      <h3 className={styles.infoProduct}>$ {price}</h3>
  </section>
</Link>
  )
}

export default ListWomen