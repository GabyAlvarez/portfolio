import React from 'react';
import styles from '../assets/styles/about.module.css'

const Card = ({techSkills}) => {


    return ( 
        <div className= {styles.card}>
            <div className= 'animate__animated animate__bounceIn'>
                <img src={techSkills.img} alt="" className={styles.imgSkills}/>
                <p className={styles.nameSkills}>{techSkills.name}</p>
            </div>
        </div>
     );
}
 
export default Card;