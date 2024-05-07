// Menu.js
import React, { useContext } from "react";
import styles from "./Menu.module.scss";
import { bool } from "prop-types";
import { ThemeContext } from "../../styles/ThemeContext";

const Menu = ({ open, setOpen }, props) => {
  const { isDarkMode } = useContext(ThemeContext);

      // Menu open and close
  function menuchange(){
    const menuchange = document.getElementById("menu")
    if (open === false){
      menuchange.style.transform = "translateX(0%)";

    }
    if (open === true){
      menuchange.style.transform = "translateX(-100%)";

    }
  }
  return (
    <div className={`${styles.menu} ${isDarkMode ? styles["dark-mode"] : ""}`} id="menu" open={open}>
      <ul style={{ overflow: "hidden" }}>
        <li className={styles.navitem}>
          <a className="active" href="../">
            Home
          </a>
        </li>
        <li className={styles.navitem}>
          <a onClick={menuchange} href="/home#aboutme">
            About
          </a>
        </li>
        <li className={styles.navitem}>
          <a href="../projects/">Projects</a>
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
};
export default Menu;
