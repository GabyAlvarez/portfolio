import React from 'react';
import styles from '../assets/styles/nav.module.css'
// import gabs from  '../../images/gabs.jpg'

const Description = () => {
    return ( 
        <div className={styles.sectionMe}>
            <h3>CONOCEME</h3>
            <h1>Dejame presentarme</h1>
            <div style={{backgroundImage: 'url("images/gabs.jpg")', backgroundSize: 'cover'}} alt="name" className={styles.myPhoto}></div>
            <div className={styles.description}>
                <p className={styles.description}>Me apasiona desarrollar soluciones enfocadas a mejorar la vida de las personas, lo cual me llevo a encontrar en la programación una forma de hacerlo posible. Soy desarrolladora Front-End con background en administración de negocios, lo que me permite tener una visión y análisis enfocada en el cliente y la empresa.</p>
            </div>

        </div>
     );
}
 
export default Description;