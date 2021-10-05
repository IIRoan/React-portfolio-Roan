import React from 'react';
import stylesnav from './Navbar.module.scss';


export default function Navbar() {
  return(    
<div className={stylesnav.header}>
            <div>
                <a href="../"><img alt="Logo" src="https://iroan.tech/img/logo-minimal.png" classname={stylesnav.logo} /></a>
                <ul>
                    <li><a class="active" href="../">Home</a></li>
                    <li><a href="/home#aboutme">About</a></li>
                    <li><a href="../projects/">Projects</a></li>
                    
                    <li>
                        <a href="https://iroan.tech" class="fa fa-at"> </a>
                        <a href="https://nl.linkedin.com/in/roan-van-westerop-186965200" class="fa fa-linkedin"> </a>
                        <a href="https://github.com/IIRoan" class="fa fa-github"> </a>
                    </li>
                </ul>
                
            </div>
</div>
  );
}