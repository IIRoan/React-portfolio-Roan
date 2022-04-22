// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import StyledBurger from './Burger.module.scss';



const Burger = ({ open, setOpen }) => {

  function menuchange(){

        // Open and close the menu
    const menuchange = document.getElementById("menu")
    if (open === false){
      menuchange.style.transform = "translateX(0%)";

    }
    if (open === true){
      menuchange.style.transform = "translateX(-100%)";

    }
  }
  return (
    // The burger menu
    <div onClick={menuchange}>
    <div className={StyledBurger.StyledBurger} open={open} onClick={() => setOpen(!open)}>
      <div className={StyledBurger.bar} />
      <div className={StyledBurger.bar}/>
      <div className={StyledBurger.bar}/>
    </div>
    </div>
  )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
export default Burger;