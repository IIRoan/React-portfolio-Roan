import React, { useContext } from 'react';
import stylesfooter from './Footer.module.scss';
import { ThemeContext } from "../../styles/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${stylesfooter.footer} ${isDarkMode ? stylesfooter.darkMode : ''}`}>
      <li>
        <a href="https://www.roan.dev" className="fa fa-at"> </a>
        <a href="mailto:public@roan.dev" className="fa fa-envelope"> </a>
        <a href="https://nl.linkedin.com/in/roan-van-westerop-186965200" className="fa fa-linkedin"> </a>
        <a href="https://github.com/IIRoan" className="fa fa-github"> </a>
        <a href="./credits.txt" className="fa fa-image"></a>
      </li>
      <>© 2024 Copyright - </>
      <a className={stylesfooter.footerlink} href="https://www.roan.dev/">Roan van Westerop</a>
    </div>
  );
};
