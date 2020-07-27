import React from 'react';
import styles from '../assets/styles/about.module.css'

const Card = (props) => {


    return ( 
        <div className={styles.card}>
            <img src={props.techSkills.img} alt="" className={styles.imgSkills}/>
            <p className={styles.nameSkills}>{props.techSkills.name}</p>
        </div>
     );
}
 
export default Card;