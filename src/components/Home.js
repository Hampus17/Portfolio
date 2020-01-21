import React from 'react'

import LandingImg from '../assets/images/undrawLanding.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

const About = (props) => {
    return (
        <div id="landingPage">
            <div id="landingLeft">
                <h1 id="landingHeader">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit.</h1>
                <p id="landingSub">Morbi sagittis sit amet quam quis consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <button className="btn_bg">Read more</button>
            </div>
            <div id="landingRight">
                <img src={LandingImg} alt="Landing Page SVG"></img>
            </div>
            <div id="socials">
                <FontAwesomeIcon className="landingIcon" icon={faGithub} />
                <FontAwesomeIcon className="landingIcon" icon={faLinkedin} />
                <FontAwesomeIcon className="landingIcon" icon={faCodepen} />
            </div> 
            <p id="landingLocation">Stockholm, Sweden</p>
            <div id="scrollButton">
                <p><div></div>Scroll</p>
            </div>
            
        </div>
    );
}

export default About;