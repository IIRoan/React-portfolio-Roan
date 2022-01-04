import React from 'react';
import stylesnav from './Navbar.module.scss';
import logominimal from './logo-minimal.png'

export default function Navbar(props) {
  return (
    <div className={stylesnav.header}>
      <div>
        <ul>
          <a href="../"><img alt="Logo" src={logominimal} className={stylesnav.logo} /></a>
          <li><a className="active" href="../">Home</a></li>
          <li><a href="/home#aboutme">About</a></li>
          <li><a href="../projects/">Projects</a></li>
          <li><a href="mailto:contact@iroan.net">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}