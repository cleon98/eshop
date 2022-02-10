import React, {useState} from 'react';
import logo from "../imagenes/logo.png"
import { products } from '../data';
import styles from "../styles/Products.module.css"
import { Link } from 'react-router-dom';



const Category = () => {
    const[data,setData] = useState(products);
    const filterResult = (catGender) => {
        const result = products.filter((curData)=>{
            return curData.gender===catGender;
        })
        setData(result);
        console.log(result)
    }
  return(
  <div >
      <Link to="/">
      <button className={styles.buttonMale} onClick={()=>filterResult('Hombre')}> Hombre</button></Link>
          
          <Link to="/" className={styles.logoCatalog}><img src={logo} className={styles.logoCatalog} alt="Website logo"/></Link>
      {data.map((values)=>{
           const{id, category, description, price, size, color, gender, img} = values
          return(
          <data id={id} category={category} description={description} price={price} 
          size={size} color={color} gender={gender} img={img} key={id}/>
          )
          
          })}
  </div>

  )
};

export default Category;