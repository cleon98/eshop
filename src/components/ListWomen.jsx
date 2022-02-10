import React from 'react'
import { Link } from 'react-router-dom'

const ListWomen = (props) => {
    const {id, category, description, price, img} = props
  return (
    <Link to={`/productos/${id}`}>
  <section >
      <img  alt="pictures of the products" src={img}/>
      <h2>{category}</h2>
      <p>{description}</p>
      <h3>$ {price}</h3>
  </section>
</Link>
  )
}

export default ListWomen