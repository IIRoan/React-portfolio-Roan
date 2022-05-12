import React from 'react';
import stylesnav from './Navbar.module.scss';
import logominimal from './logo-minimal.webp'

export default function Navbar(props) {
  return (
    <div className={stylesnav.header}>
      <div>
        <ul>
          <a href="../"><img alt="Logo" src={logominimal} className={stylesnav.logo} /></a>
          <li><a className="active" href="../">Home</a></li>
          <li><a href="/home#aboutme">About</a></li>
          <li><a href="https://github.com/IIRoan" alt="Github Link" target="_blank" rel="noreferrer">Projects</a></li>
          <li><a href="mailto:contact@iroan.net">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}