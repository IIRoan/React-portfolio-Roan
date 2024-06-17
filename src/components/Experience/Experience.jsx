import React, { useEffect, useContext } from 'react';
import stylesExp from './Experience.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from "../../styles/ThemeContext";

export default function Experience() {
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="experience" className={`${stylesExp.container} ${isDarkMode ? stylesExp.darkMode : ''}`} data-aos="fade-up">
      <div className={stylesExp.toptext}>
        <h2>This is my <span>Education</span></h2>
        <p>Software Developer student @ Rotterdam Academy</p>
      </div>
      <div className={stylesExp.educationcontainer}>
        <div className={stylesExp.education}>
          <div className={stylesExp.texteducation}>
            <h3><i className="fa fa-graduation-cap" aria-hidden="true"></i></h3>
            <span>Education</span>
          </div>
          <ul>
            <li>
              <span>Software Developer</span>
              <small>Rotterdam University of Applied Sciences</small>
              <small>2023-Current</small>
            </li>
            <li>
              <span>Network & Media management - IT</span>
              <small>Grafisch Lyceum Rotterdam</small>
              <small>2018-2022</small>
            </li>
            <li>
              <span>Mavo VMBO-TL</span>
              <small>Melanchthon de Blesewic</small>
              <small>2014-2018</small>
            </li>
          </ul>
        </div>
        <div className={stylesExp.education}>
          <div className={stylesExp.texteducation}>
            <h3><i className="fa fa-briefcase" aria-hidden="true"></i></h3>
            <span>Work experience</span>
          </div>
          <ul>
            <li>
              <span>De Pannekoek en De Kale (DPDK)</span>
              <small>DevOps Intern</small>
              <small>2021-2022</small>
            </li>
            <li>
              <span>Albert Heijn</span>
              <small>Part-time</small>
              <small>2018-Current</small>
            </li>
            <li>
              <span>...</span>
              <small>...</small>
              <small>...</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
