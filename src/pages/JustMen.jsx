import React from "react";
import Footer from "../components/Footer";
import { products } from "../data";
import Navbar from "../components/Navbar";
import styles from "../styles/JustWomen.module.css";
import ListMen from "../components/ListMen"

const JustMen = () => {
 
  return (
    <div>
      <Navbar />
      <section className={styles.titleHeader}>
      <h1>Hombre</h1>
      </section>
      <div className={styles.stylesWomen}>
      {products.filter((product) => product.gender == "Hombre").map((filteredProduct) => (
        <ListMen id={filteredProduct.id} category={filteredProduct.category} description={filteredProduct.description}
        price={filteredProduct.price} size={filteredProduct.size} color={filteredProduct.color} img={filteredProduct.img}
        key={filteredProduct.id}/>
        ))}
   </div>
      <Footer />
    </div>
  );
};

export default JustMen;