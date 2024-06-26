import React, { useContext, useEffect } from 'react';
import styleshome from './Home.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from "../../styles/ThemeContext";

export default function Home() {

  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    // The home cards
    <div id="aboutme">
      <div className={isDarkMode ? styleshome.darkMode : ''} data-aos="fade-up">
        <div >
          <div className="scroll-caption container">
            <div className="row">
              <div className={styleshome.toptext}>
                <h4 style={{ marginTop: '5vh' }}> Hi, I am <span>Roan</span></h4>
                <p>Hey, I am Roan van Westerop. I am a 21 year old Software Developer at Rotterdam Academy.
                  <br />This website serves as a portfolio, as well as a collection of my previous work.</p>
              </div>
              <div className="col-lg-4">
                <div className={styleshome.item}>
                  <i className="icons fa fa-linux " />
                  <h6><strong>Linux</strong></h6>
                  <p>I have a good deal of experience with Linux, a lot of that experience is with Ubuntu Server. I host my website, game servers and VPN on Ubuntu in the cloud.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styleshome.item}>
                  <i className="icons fa fa-gamepad" />
                  <h6><strong>Game Servers</strong></h6>
                  <p>In my spare time, I host game servers for me and my friends. The types of servers change a lot, from Java Minecraft Servers to Battlefield servers.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styleshome.item}>
                  <i className="icons fa fa-windows" />
                  <h6><strong>Windows (server)</strong></h6>
                  <p>Besides Linux, I also have a great deal of experience with Windows. I have experience with Active Directory, DNS, DHCP, DFS, MSSQL and IIS. I also know a lot about Windows enterprise software.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styleshome.item}>
                  <i className="icons fa fa-graduation-cap" />
                  <h6><strong>Network- Media management</strong></h6>
                  <p>I finished my degree in Network and Media management at Grafisch Lyceum in Rotterdam in 2022.<br /> (MBO4)</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styleshome.item}>
                  <i className="icons fa fa-code" />
                  <h6><strong>Coding Experience</strong></h6>
                  <p>I have a a good amount of experience in languages like HTML, CSS, JavaScript and Python.<br /> For example, I made this website. Check out some of my other projects <a href="https://github.com/IIRoan" style={{ color: 'blueviolet', textDecoration: 'none' }}>here</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styleshome.item}>
                  <i className="icons fa fa-info" />
                  <h6><strong>CI/CD</strong></h6>
                  <p>I have experience with CI/CD, and i often use GitHub Actions to automate my workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
};
