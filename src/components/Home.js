import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

const About = (props) => {
    return (
        <div id="landingPage">
            <h1 id="landingHeader">hampus.</h1>
            <p id="landingSub">Art director & frontend developer</p>
            <p id="landingDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis leo a est feugiat, et pretium justo venenatis<br/>. In nulla justo, mollis a odio a, suscipit tempus augue. Vestibulum laoreet convallis rhoncus. Etiam congue <br/>fringilla mauris, at lacinia metus sodales nec. Integer auctor rhoncus metus sed placerat.</p>
            <button className="btn_bg">Read more</button>
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