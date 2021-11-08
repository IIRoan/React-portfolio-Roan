import React from 'react';
import stylesprojects from './Projects.module.scss'

export default function Projects() {
  return(
                <div className={stylesprojects.projects}>
                <a href="https://mineglr.nl"><img className={stylesprojects.zoom} src="https://iroan.tech/img/mcmdb.png" alt="MCMDB"/></a>
                <a href="https://react.iroan.tech"><img className={stylesprojects.zoom} src="https://iroan.tech/img/react.png" alt="React"/></a>
                <a href="https://iroan.tech"><img className={stylesprojects.zoom} src="https://iroan.tech/img/mainweb.png" alt="Mainweb"/></a>
                </div>
  );
}
