import React, { useContext, useEffect } from 'react';
import stylesnav from './Navbar.module.scss';
import logominimal from './logo-minimal.webp';
import { ThemeContext } from '../../styles/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    Cookies.set('darkMode', newDarkModeState ? 'enabled' : 'disabled', { expires: 7 }); // Save for 7 days
  };

  // Load dark mode preference from cookies on component mount
  useEffect(() => {
    const darkModeCookie = Cookies.get('darkMode');
    if (darkModeCookie) {
      setIsDarkMode(darkModeCookie === 'enabled');
    }
  }, [setIsDarkMode]);

  return (
    <div className={`${stylesnav.header} ${isDarkMode ? stylesnav['dark-mode'] : ''}`}>
      <div>
        <ul>
          <a href="../">
            <img alt="Logo" src={logominimal} className={stylesnav.logo} />
          </a>
          <li><a className="active" href="../">Home</a></li>
          <li><a href="#aboutme">About</a></li>
          <li>
            <a href="https://github.com/IIRoan" alt="Github Link" target="_blank" rel="noreferrer">
              Projects
            </a>
          </li>
          <li><a href="mailto:public@roan.dev">Contact</a></li>
          <li>
            <label className={stylesnav.switch}>
              <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
              <span className={stylesnav.slider}>
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className={stylesnav.icon} />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
