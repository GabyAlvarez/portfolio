import React from 'react'
import projectTech from '../assets/data/projects'
import CardProject from './CardProject'
import styles from '../assets/styles/portfolio.module.css'

const Portfolio = () => {

  const projects = projectTech

  return ( 
    <div className={styles.containerProjects}>
        {
          projects.map(item => (
                <CardProject 
                projects = {item}  
                key={item.id}
                />
          ))}
    </div>

  );
}
 
export default Portfolio;
 
