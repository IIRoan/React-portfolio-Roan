import React, { useRef, useEffect, useContext } from "react";
import image_back from "./city-bg.webp";
import styles from "./Projects-header.module.scss";
import { ThemeContext } from "../../styles/ThemeContext";

export default function ProjectsHeader(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const textRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const textmove = textRef.current;
    const btnmove = btnRef.current;

    // Function to update element positions based on scroll
    const updatePositions = () => {
      const offsets = document.getElementById("h2").getBoundingClientRect();
      const top = window.scrollY + offsets.top; 
      const value = window.scrollY - top;

      // Adjust the calculations to account for the additional component
      let adjustedValue = value * 1.4 - 1000; 

      if (window.innerWidth <= 1200) {
        adjustedValue -= 400;
      }

      textmove.style.marginTop = adjustedValue + "px";
      btnmove.style.marginTop = adjustedValue + "px";

    };

    // Initial update in case the page is not loaded at the top
    updatePositions();

    // Update positions on scroll
    window.addEventListener("scroll", updatePositions);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", updatePositions);
    };
  }, []);

  return (
    <>
      <div className={styles.headersection}>
        <h2 id="h2" ref={textRef} className={styles.text}>
          My Projects
        </h2>
        <a ref={btnRef} href="#projects" className={`${styles.btn} ${isDarkMode ? styles.darkModeBtn : ''}`}>
          Projects
        </a>
        <div className={styles.imgheadcontainer}>
          <img src={image_back} className={styles.backimage} alt="backimage" />
        </div>
        <div className={styles.imgheadcontainer}></div>
      </div>
    </>
  );
}
