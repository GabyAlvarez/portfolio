import React from 'react';
import styles from '../assets/styles/portfolio.module.css'
import { Link } from 'react-router-dom';

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
                     <img key={item} className={styles.techImg} src={item}  alt="html"/>
                 ))}
                </div>
                <div className={styles.textCard}>
                <p>{projects.text}</p>
                </div>
                <Link to="route" target="_blank"  className={styles.iconLinkedin}
                onClick={(event) => {
                    event.preventDefault(); 
                    window.open(`${projects.linkGithub}`)
                    }}>Github</Link>
        </div>
    );
}
 
export default CardProject;