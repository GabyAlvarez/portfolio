import React from 'react';
import styles from '../assets/styles/nav.module.css'
// import gabs from  '../../images/gabs.jpg'

const Description = () => {
    return ( 
        <div className={styles.sectionMe}>
        <h1 className="animate__animated animate__backInDown">Bienvenidos</h1>
        <div className={styles.sectionPhoto}>
        <img src="../images/perfil1.png" alt="myPhoto" className={styles.myPhoto}></img>
            <div className={styles.description}>
                <p>Que gusto que estés aquí. Te quiero contar un poco acerca de mi, soy una persona apasionada por desarrollar soluciones enfocadas a mejorar la vida de las personas, lo cual me llevo a encontrar en la programación una forma de hacerlo posible. Soy desarrolladora Front-End con background en administración de negocios, lo que me permite tener una visión y análisis enfocada en el cliente y la empresa.</p>
            </div>
        </div>
        
        </div>
     );
}
 
export default Description;