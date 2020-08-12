import React from 'react';
import styles from '../assets/styles/nav.module.css'

const Home = () => {
    return (
        // background-image: linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(/images/portada5.jpg);

    <div className={styles.sectionHome} style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("${process.env.PUBLIC_URL}/images/portada1.png")`, backgroundSize: 'cover'}}>
        <div  className={styles.sectionHomeInformation} >
            <div className= 'animate__animated animate__backInDown'>
                <h1>Gaby Alvarez</h1>
            </div>
            <div className= 'animate__animated animate__backInLeft'>
                <h2>FRONT-END DEVELOPER</h2>
            </div>
            <div  className={styles.sectionHomeBtn}>     
                <button className={styles.btnCV}>Descarga CV</button>
            </div>
        </div>
    </div>
    
    );
}
 
export default Home;