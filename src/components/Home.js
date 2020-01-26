import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

import Typer from './Typer';

const Home = (props) => {
    return (
        <div id="landingPage">
            <div id="bg"></div>
            <h3 id="catchPhrase">Do you want to...</h3>
            <Typer 
                dataText = {[
                    'INVENT SOMETHING DISRUPTIVE?', 
                    'CREATE AN ECOMMERCE WEBSITE?', 
                    'GET STARTED WITH BLOGGING?', 
                    'MARKET A PRODUCT?',
                    'GET PEOPLE TO MARS?'
                ]}
            />
            {/*<button className="btn_bg">Read more</button>*/}
            <div id="socials">
                <a href="https://github.com/Hampus17/"><FontAwesomeIcon className="landingIcon" icon={faGithub} /></a>
                <a href="https://linkedin.com/in/Hampus17/"><FontAwesomeIcon className="landingIcon" icon={faLinkedin} /></a>
                <FontAwesomeIcon className="landingIcon" icon={faCodepen} />
            </div> 
            <p id="landingLocation">Stockholm, Sweden</p>
            <div id="scrollButton">
                <p><div></div>Scroll</p>
            </div>
            
        </div>
    );
}

export default Home;