import React from 'react';
import stylesfooter from './Footer.module.scss'


export default function Footer() {
  return (

    <div className={stylesfooter.footer}>
      <li>
        <a href="https://iroan.tech" class="fa fa-at"> </a>
        <a href="https://nl.linkedin.com/in/roan-van-westerop-186965200" class="fa fa-linkedin"> </a>
        <a href="https://github.com/IIRoan" class="fa fa-github"> </a>
      </li>
      <p1>© 2021 Copyright - </p1>
      <a className={stylesfooter.footerlink} href="https://iroan.tech/">Roan van Westerop</a>
    </div>
  );
};
