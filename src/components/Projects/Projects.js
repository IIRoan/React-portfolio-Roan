import React from 'react';
import stylesprojects from './Projects.module.scss'
import react from './react.png'
import mainweb from './mainweb.png'
import mcmdb from './mcmdb.png'

export default function Projects() {
  return(
                <div className={stylesprojects.projects}>
                <a href="https://mineglr.nl"><img className={stylesprojects.zoom} src={mcmdb} alt="MCMDB"/></a>
                <a href="https://react.iroan.tech"><img className={stylesprojects.zoom} src={react} alt="React"/></a>
                <a href="https://iroan.tech"><img className={stylesprojects.zoom} src={mainweb} alt="Mainweb"/></a>
                </div>
  );
}
