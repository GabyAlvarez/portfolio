import React from 'react';
import styles from '../assets/styles/portfolio.module.css'

const CardProject = ({projects}) => {
    return (
        <div className={styles.cardProject}>
                <figure>
                    <img className={styles.imgProject} src={projects.img} alt=""/>
                </figure>
                <h3>{projects.name}</h3>
                <div>
                {
                 projects.tools.map(item => (
                     <img className={styles.techImg} src={item}  alt="html"/>
                 ))}
                </div>
                <div className={styles.textCard}>
                <p>{projects.text}</p>
                </div>
                <a href={projects.linkGithub}>Github</a>

        </div>
    );
}
 
export default CardProject;