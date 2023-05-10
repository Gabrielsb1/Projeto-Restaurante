import React from 'react';
import Carrosel from '../layout/Carrosel';
import Cards from '../layout/Cards';
import Footer from '../layout/Footer';
import styles from './Home.module.css';


function Home() {

    return (
        <body className={styles.my_body}>
        <Carrosel />
        <Cards />
        
        <div className={styles.my_Container}></div>

        <Footer />
        
      
  
      </body> 
       
    );
}

export default Home;
