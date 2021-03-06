import React from 'react';
import styles from '../assets/styles/nav.module.css'
import { Link } from 'react-router-dom';

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
            <Link to="route" target="_blank"  className={styles.btnCV}
                onClick={(event) => {
                    event.preventDefault(); 
                    window.open("https://firebasestorage.googleapis.com/v0/b/repoimg-ba7b4.appspot.com/o/GabsAlvarez.CV.pdf?alt=media&token=571fda60-31f9-4b05-8dea-15706e29de4d")
                    }}>Descarga CV</Link>
            </div>
        </div>
    </div>
    
    );
}
 
export default Home;