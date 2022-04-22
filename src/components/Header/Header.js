import React, { useRef, useEffect } from "react";
import image_back from './image_back.png'
import computer from './computer.png'
import styles from './Header.module.scss'

export default function Header(props) {

  // Move the button and text down with the topmargin
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
        <img src={image_back} className={styles.backimage} alt="backimage" /> </div>
      <div className={styles.imgheadcontainer}>
        <img src={computer} className={styles.computer} alt="frontimage" />
      </div>
      <h2 ref={textRef} className={styles.text}><span>Roan</span> van Westerop</h2>
      <a ref={btnRef} href="./home#aboutme" className={styles.btn} >About me</a>
    </div>
  );
}
