import React from 'react'
import styles from '../assets/styles/contact.module.css'

const Contact = () => {
    return ( 
        <div className={styles.contactForm}>
            <h2>Contacto</h2>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Mensaje"/>
            <input type="button" value="Enviar" className={styles.btnSend}/>
        </div>
     );
}
 
export default Contact;