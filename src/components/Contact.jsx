import React from 'react'
import styles from '../assets/styles/contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>
            {/* <h2>Contacto</h2> */}

            <div className={styles.contactNetworks}>
                <h3>No seas timido</h3>
                <p>No dude en ponerse en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de sus visiones.</p>
                <div className={styles.networks}>
                    <div className={styles.iconEmail}></div>
                    <div>
                    <h4>gabyalvarzb@gmail.com</h4>
                    </div>
                </div>
                <div className={styles.networks}>
                    <div className={styles.iconLinkedin}></div>
                    <div>
                    <h4>gabyalvarezb</h4>
                    </div>
                </div>
            </div>

            <div className={styles.contactForm}>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Mensaje"/>
                <input type="button" value="Enviar" className={styles.btnSend}/>
            </div>

        </div>
        
     );
}
 
export default Contact;