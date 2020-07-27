import React from 'react';
import styles from '../assets/styles/nav.module.css'
//import portada from '../../public/images/portada1.jpg';
import Menu from './Menu'

{/* <div className={styles.sectionHome} style={{backgroundImage: 'url("images/portada.jpg")', backgroundSize: 'cover'}}>
<div className={styles.sectionHome} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/portada.jpg")`, backgroundSize: 'cover'}}> */}

const Home = () => {
    return (
    <div className={styles.sectionHome} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/portada3.jpg")`, backgroundSize: 'cover'}}>
        <div>
            <h2>Hola, yo soy</h2>
        </div>
        <div>
            <h1>Gaby Alvarez</h1>
        </div>
        <div>
            <p><span>FRONT END DEVELOPER</span></p>
        </div>
        <div>
            <button className={styles.btnCV}>Descarga CV</button>
        </div>
    </div>
    
    );
}
 
export default Home;