import React from 'react'
import styles from '../assets/styles/contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.getTouch}>
            
            <div className={styles.contactNetworks}>
                <p>Tienes un proyecto en mente o te agrada mi perfil, no dudes en escribirme por el medio de tu elección y me pondré en contacto contigo lo antes posible.</p>
                <div className={styles.iconEmail}></div>
                <div><h4>gabyalvarzb@gmail.com</h4></div>
                <a  rel="noopener noreferrer" href="https://www.linkedin.com/in/gabyalvarezb/" target="_blank" className={styles.iconLinkedin}></a> 
            </div>
            <div className={styles.contactForm}>
                <h4>Form</h4>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Mensaje"/>
                <input type="button" value="Enviar" className={styles.btnSend}/>
            </div>

            </div>
        </div>
        
     );
}
 
export default Contact;