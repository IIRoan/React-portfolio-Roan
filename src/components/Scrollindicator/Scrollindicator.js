import React from 'react';
import Scrollindicator from './Scrollindicator.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    AOS.init();

    window.onscroll = function () { Scrollindicatorupdate() };

    function Scrollindicatorupdate() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
        if (scrolled > 1) {
            document.getElementById("header").style.opacity = "1";
        }
        if (scrolled < 1) {
            document.getElementById("header").style.opacity = "0";
        }
    }
    return (
        <div id="header" className={Scrollindicator.header}>
            <div className={Scrollindicator.progresscontainer}>
                <div className={Scrollindicator.progressbar} id="myBar"></div>
            </div>
        </div>
    );
}
