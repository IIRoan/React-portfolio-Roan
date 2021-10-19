import React, { useRef, useEffect } from "react";
import styles from './Showcaseheader.module.scss'


export default function Header(props) {
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
    <div className={styles.headersection}>
      <div className={styles.imgheadcontainer}>
        <video loop autoPlay muted>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type ="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div>
        <h2 ref={textRef} className={styles.text}>Showcase</h2>
        <a ref={btnRef} href="./home#aboutme" className={styles.btn} >My work</a>
      </div>
      );
}
