import React, { useContext, useEffect } from "react";
import styles from "./Menu.module.scss";
import { bool, func } from "prop-types";
import { ThemeContext } from "../../styles/ThemeContext";

const Menu = ({ open, setOpen }) => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className={`${styles.menu}  ${isDarkMode ? styles.darkMode : ''}`} id="menu" open={open}>
      <ul style={{ overflow: "hidden" }}>
        <li className={styles.navitem}>
          <a className="active" href="../">
            Home
          </a>
        </li>
        <li className={styles.navitem}>
          <a onClick={() => setOpen(false)} href="#aboutme">
            About
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="https://github.com/IIRoan" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="https://www.roan.dev" className="fa fa-at">
            {" "}
          </a>
          <a
            href="https://nl.linkedin.com/in/roan-van-westerop-186965200"
            className="fa fa-linkedin"
          >
            {" "}
          </a>
          <a href="https://github.com/IIRoan" className="fa fa-github">
            {" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
