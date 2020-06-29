import React from 'react';
import styles from '../styles/nav.module.css'
// import Background from '../../images/portada.jpg';
import Menu from './Menu'

const Home = () => {
    return (
    <div className={styles.sectionHome} style={{backgroundImage: 'url("../../images/portada.jpg")', backgroundSize: 'cover'}}>
    {/* <div className={styles.sectionHome} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/portada.jpg")`, backgroundSize: 'cover'}}> */}
        <div className={styles.sectionHome}>
            <div className={styles.description}>
                <p>Hola, yo soy</p>
                <p>Gaby Alvarez, desarrollar front end</p>

                <img src="../../images/gabs.jpg" alt="name" className={styles.myPhoto} />
                <p className="description">Me apasiona desarrollar ideas que ayudan a mejorar la vida de las personas. Me encanta formar parte de un equipo que me permite contribuir ideas y soluciones atendiendo los distintos retos que se presentan en el día a día.</p>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    </div>
    
    );
}
 
export default Home;