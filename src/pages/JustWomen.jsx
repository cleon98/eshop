import React from "react";
import Footer from "../components/Footer";
import { products } from "../data";
import Navbar from "../components/Navbar";
import styles from "../styles/JustWomen.module.css";
import ListWomen from "../components/ListWomen";

const JustWomen = () => {
  
  return (
    <div>
      <Navbar />
      <section className={styles.titleHeader}>
      <h1>Mujer</h1>
      </section>
      <div className={styles.stylesWomen}>
      {products.filter((product) => product.gender == "Mujer").map((filteredProduct) => (
        <ListWomen id={filteredProduct.id} category={filteredProduct.category} description={filteredProduct.description}
        price={filteredProduct.price} size={filteredProduct.size} color={filteredProduct.color} img={filteredProduct.img}
        key={filteredProduct.id}/>
        ))}
   
   </div>
      <Footer />
    </div>
  );
};

export default JustWomen;
