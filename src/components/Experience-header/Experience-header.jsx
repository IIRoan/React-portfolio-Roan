import React, { useRef, useEffect, useContext } from "react";
import image_back from "./city-bg.webp";
import styles from "./Experience-header.module.scss";
import { ThemeContext } from "../../styles/ThemeContext";

export default function ExperienceHeader(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const textRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const textmove = textRef.current;
    const btnmove = btnRef.current;

    // Function to update element positions based on scroll
    const updatePositions = () => {
      const offsets = document.getElementById("h2").getBoundingClientRect();
      const top = window.scrollY + offsets.top; // Adjust top based on current scroll position
      const value = window.scrollY - top;
      textmove.style.marginTop = value * 1.2 + 400 + "px";
      btnmove.style.marginTop = value * 1.2 + 400 + "px";
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
