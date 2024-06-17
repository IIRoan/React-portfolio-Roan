import React, { useRef, useEffect, useContext } from "react";
import image_back from './image_back.webp';
import computer from './computer.webp';
import styles from './Header.module.scss';
import { ThemeContext } from "../../styles/ThemeContext"; 


export default function Header(props) {
 const { isDarkMode } = useContext(ThemeContext);
 const textRef = useRef();
 const btnRef = useRef();
 useEffect(() => {
    const textmove = textRef.current;
    const btnmove = btnRef.current;
    window.addEventListener('scroll', (props) => {
      const value = window.scrollY;
      textmove.style.marginTop = value * 1.5 + 'px';
      btnmove.style.marginTop = value * 1.5 + 'px';
    });
 }, [])

 return (
    <div className={`${styles.headersection} ${isDarkMode ? styles.darkMode : ''}`}>
      <div className={styles.imgheadcontainer}>
        <img src={image_back} className={styles.backimage} alt="backimage" />
      </div>
      <div className={styles.imgheadcontainer}>
        <img src={computer} className={styles.computer} alt="frontimage" />
      </div>
      <h2 ref={textRef} className={styles.text}><span>Roan</span> van Westerop</h2>
      <a ref={btnRef} href="#aboutme" className={`${styles.btn} ${isDarkMode ? styles.darkModeBtn : ''}`} >About me</a>
    </div>
 );
}
