import React from 'react'

const About = (props) => {
    return (
        <section id="aboutSection">
            <div id="aboutLeft"> 
                <h1 className="aboutTitle">Front-end Developer & Designer</h1>
                <p className="aboutDesc">I am a student based in Stockholm and soon to graduate from high school, with a passion for developing and creating things. I am looking for opportunities to test new technologies to expand my technical skillset.</p>
            </div>
            <div id="aboutMiddle">
                <h1 className="aboutTitle">Technologies</h1>
                <p className="aboutDesc">
                    Currently working with the MERN stack with a focus on the front-end.
                    
                    <br/><br/>Familiar with technologies such as: 
                </p>
                
                <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>MongdoDB</li>
                    <li>Redux</li>
                    <li>CSS3</li>
                    <li>Sass</li>
                    <li>APIs</li>
                </ul>
            </div>
            <div id="aboutRight">
                <img src={require('../assets/images/portfoliowebsite.svg')} alt="test"></img>
            </div>
            
        </section>
    );
}

export default About;