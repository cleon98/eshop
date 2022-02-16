import React from "react";
import Footer from "../components/Footer";
import { products } from "../data";
import Navbar from "../components/Navbar";
import styles from "../styles/JustMen.module.css"
import Product from "../components/Product";
import GoToTop from '../components/onTop';

const JustMen = () => {
 
  return (
    <div>
      <Navbar />
      <section className={styles.titleHeader}>
      <h1>Hombre</h1>
      </section>
      <div className={styles.stylesMen}>
      {products.filter((product) => product.gender === "Hombre").map((filteredProduct) => (
        <Product id={filteredProduct.id} category={filteredProduct.category} description={filteredProduct.description}
        price={filteredProduct.price} size={filteredProduct.size} color={filteredProduct.color} img={filteredProduct.img}
        key={filteredProduct.id}/>
        ))}
   </div>
   <GoToTop/>
      <Footer />
    </div>
  );
};

export default JustMen;