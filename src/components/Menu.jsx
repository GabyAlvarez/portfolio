import React from 'react';
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
    <nav>
        <Link exact to="/" className={styles.menuOption}>
        <span>Inicio</span>
        </Link>
        <Link to="/About" className={styles.menuOption}>
        <span>Acerca de mi</span>
        </Link>
        <Link to="/Portfolio" className={styles.menuOption}>
        <span>Proyectos</span>
        </Link>
        <Link to="/Contact" className={styles.menuOption}>
        <span>Contacto</span>
        </Link>
    </nav>
     );
}
 
export default Menu;