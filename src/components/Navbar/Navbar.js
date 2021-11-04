import React from 'react';
import stylesnav from './Navbar.module.scss';
import logominimal from './logo-minimal.png'

export default function Navbar(props) {
  return (
    <div className={stylesnav.header}>
      <div>
        
        <ul>
        <a href="../"><img alt="Logo" src={logominimal} classname={stylesnav.logo} /></a>
          <li><a class="active" href="../">Home</a></li>
          <li><a href="/home#aboutme">About</a></li>
          <li><a href="../projects/">Projects</a></li>
        </ul>
      </div>
    </div>
  );
}