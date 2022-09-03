import React from 'react';
import stylesExp from './Experience.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function home() {
  AOS.init();
  return (
        // The home cards
    <div id="aboutme">
      <div data-aos="fade-up">
        <div class="scroll-caption" className="container">
          <div className="row">
            <div className={stylesExp.toptext} >
              <h2>This is my <span>Education</span></h2>
              <p>Software engineering student @ The Hague</p>
            </div>

            <div className={stylesExp.educationcontainer}>
              <div className={stylesExp.education}>
                <div className={stylesExp.texteducation}>
                  <h3> <i className="fa fa-graduation-cap" aria-hidden="true"></i></h3> <span>Education</span>
                </div>
                <ul>
                  <li>
                    <span>HBO ICT </span>
                    <small>The Hague University of Applied Sciences</small> <small> 2022-Current</small>
                  </li>
                </ul>
                <ul>
                  <li>
                  <span>Network & Media management - IT </span>
                  <small>Grafisch Lyceum Rotterdam </small> <small> 2018-2022</small>

                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Mavo VMBO-TL</span>
                    <small>Melanchthon de Blesewic </small> <small> 2014-2018</small>

                  </li>
                </ul>

              </div>

              <div className={stylesExp.education}>
                <div className={stylesExp.texteducation}>
                  <h3> <i className="fa fa-briefcase" aria-hidden="true"></i></h3> <span>Work experience</span>
                </div>
                <ul>
                  <li>
                    <span>De Pannekoek en De Kale (DPDK)</span>
                    <small>DevOps Intern </small> <small> 2021-2022</small>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Albert Heijn</span>
                    <small>Part-time </small> <small> 2018-Current</small>

                  </li>
                </ul>

                <ul>
                  <li>
                    <span>...</span>
                    <small>...</small>

                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
