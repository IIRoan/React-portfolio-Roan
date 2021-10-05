import React from 'react';
import stylesfooter from './Footer.module.scss'


export default function Footer() {
    return (

        <div className={stylesfooter.footer}>
          <p1>© 2021 Copyright - </p1>
          <a className={stylesfooter.footerlink} href="https://iroan.tech/">Roan van Westerop</a>
        </div>
      );
    };
