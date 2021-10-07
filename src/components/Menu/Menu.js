// Menu.js
import React from "react";
import styles from "./Menu.module.scss";
import { bool } from "prop-types";

const Menu = ({ open, setOpen }, props) => {
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
    <div className={styles.menu} id="menu" open={open}>
      <ul style={{ overflow: "hidden" }}>
        <li className={styles.navitem}>
          <a class="active" href="../">
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
          <a href="https://iroan.tech" class="fa fa-at">
            {" "}
          </a>
          <a
            href="https://nl.linkedin.com/in/roan-van-westerop-186965200"
            class="fa fa-linkedin"
          >
            {" "}
          </a>
          <a href="https://github.com/IIRoan" class="fa fa-github">
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
