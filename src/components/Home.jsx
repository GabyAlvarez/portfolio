import React from 'react';
import styles from '../assets/styles/nav.module.css'

const Home = () => {
    return (

    <div className={styles.sectionHome} style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("${process.env.PUBLIC_URL}/images/portada1.png")`, backgroundSize: 'cover'}}>
        <div  className={styles.sectionHomeInformation} >
            <div className='animate__animated animate__rubberBand'>
                <h1>Gaby Alvarez</h1>
            </div>
            <div className='animate__animated animate__rubberBand'>
                <h2>FRONT-END DEVELOPER</h2>
            </div>
            <div  className={styles.sectionHomeBtn}>     
                <a href="https://firebasestorage.googleapis.com/v0/b/repoimg-ba7b4.appspot.com/o/GabyAlvarezB.pdf?alt=media&token=92f1c707-e9e5-4baa-8565-1e60de672844" className={styles.btnCV}>Descarga CV</a>
            </div>
        </div>
    </div>
    
    );
}
 
export default Home;