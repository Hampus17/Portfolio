import React from 'react'

const About = (props) => {
    return (
        <section id="aboutSection">
            <div id="aboutLeft"> 
                <h1 className="aboutTitle">Front-end Developer & Designer</h1>
                <p className="aboutDesc">I am a student based in Stockholm and will soon graduate from high school, with a passion for developing and creating things. I am looking for opportunities to develop as well as test new technologies to expand my technical skills.</p>
            </div>
            <div id="aboutMiddle">
                <h1 className="aboutTitle">Technologies</h1>
                <p className="aboutDesc"><br/>Commonly used:</p>
                <ul>
                    <li>HTML5</li>
                    <li>React.js</li>
                    <li>Firebase</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div id="aboutRight">
                <img src={require('../assets/images/portfoliowebsite.svg')} alt="test"></img>
            </div>
            
        </section>
    );
}

export default About;