import React from 'react';
import skills from '../assets/data/techSkills'
import Card from './Card'
import styles from '../assets/styles/about.module.css'

const About = () => {
    const techSkills= skills

    return (
        <div className ={styles.container}>
            <h2>Habilidades</h2>
            <div className ={styles.sectionAbout}>           
            {
                techSkills.map(item => (
                    <Card 
                    techSkills = {item}  key={item.id}
                    />
                    ))}
            </div>
        </div>

     );
}
 
export default About;