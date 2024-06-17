import React, { useRef, useEffect, useContext } from "react";
import image_back from "./city-bg.webp";
import styles from "./Experience-header.module.scss";
import { ThemeContext } from "../../styles/ThemeContext"; // Ensure the path is correct

export default function ExperienceHeader(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const textRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const textmove = textRef.current;
    const btnmove = btnRef.current;
    var offsets = document.getElementById("h2").getBoundingClientRect();
    const top = offsets.top;

    window.addEventListener("scroll", (props) => {
      const value = window.scrollY - top;
      textmove.style.marginTop = value * 1.2 + 400 + "px";
      btnmove.style.marginTop = value * 1.2 + 400 + "px";
    });
  }, []);

  return (
    <>
      <div className={styles.headersection}>
        <h2 id="h2" ref={textRef} className={styles.text}>
          My Experience
        </h2>
        <a ref={btnRef} href="#experience" className={`${styles.btn} ${isDarkMode ? styles.darkModeBtn : ''}`}>
          Experience
        </a>
        <div className={styles.imgheadcontainer}>
          <img src={image_back} className={styles.backimage} alt="backimage" />
        </div>
        <div className={styles.imgheadcontainer}></div>
      </div>
    </>
  );
}
