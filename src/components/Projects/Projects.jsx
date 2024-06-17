import React, { useState, useEffect, useContext } from 'react';
import styles from './Projects.module.scss';
import { ThemeContext } from '../../styles/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    async function fetchProjects() {
      const response = await fetch('https://api.github.com/users/iiroan/repos');
      const data = await response.json();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (

    <div className={styles.container} id="projects" data-aos="fade-up">
      <div className={styles.toptext}>
        <h4>These are my <span>projects</span></h4> 
        <p>Feel free to explore them.</p>
      </div>
      <div className={`${styles.grid} ${isDarkMode ? styles.darkMode : ''}`}>
        {projects.length === 0 ? (
          <p>Loading...</p>
        ) : (
          projects.slice(0, 6).map(project => (
            <article className={`${styles.card} ${isDarkMode ? styles.darkMode : ''}`} key={project.id}>
              <h2>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={styles.learnMoreButton}>
                Learn More
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
