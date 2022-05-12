import React, { useRef, useEffect } from "react";
import image_back from "./city-bg.webp";
import styles from "./Experience-header.module.scss";

export default function ExperienceHeader(props) {

    // Move the button and text down with the topmargin
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
        <a ref={btnRef} href="./home#experience" className={styles.btn}>
          Experience
        </a>

        <div className={styles.imgheadcontainer}>
          <img src={image_back} className={styles.backimage} alt="backimage" />{" "}
        </div>
        <div className={styles.imgheadcontainer}></div>
      </div>
    </>
  );
}
