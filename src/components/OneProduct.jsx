import React from 'react';
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { products } from '../data';

const OneProduct = () =>{

    const [product, setProduct] = useState ();
    const {prodId, otroValor} = useParams()

    useEffect(() =>{
        products(prodId).then (async (prod) => setProduct(prod))
    }, [prodId])

    setTimeout(() =>{


    },2000)

return(
    <div>
        {
            <div>
            <h1>{product.category}</h1>
          <img src={product.img} alt="" />
          <p>Status: {product.size}</p>
          {/* <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Planet: {character.origin.name}</p> */}
            </div>
        }
    </div>

)
}
export default OneProduct