import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';


const OneProduct = () => {
    const {id} = useParams();

    const product = products.find(product => product.id ==  id);
    console.log(product)
  return (
  <div className='eachProduct'> 
  <div className='eachImg'>
      <img src={product.img} alt="A picture of each product" />
  </div >
  <div className='productText'>
      <h2>{product.category}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <h3>Talla:<br/> {product.size}</h3>
  </div>
  </div>
  )
};

export default OneProduct;