import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Link, 
    Route,
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

import { Home, Contact, Projects, About } from '../components'

import logo from '../assets/images/Logo.svg'

const Navbar = (props) => {
    return (
        <Router>
            <div id="nav">
                <ul>
                    <li id="logo"><img src={logo} alt="Logo"></img></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link id="resumeBtn" to="/resume">Resumé</Link></li>
                    <li id="themeSwitch"><FontAwesomeIcon icon={faAdjust} /></li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                    <Projects />
                    <About />
                    <Contact />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>

        </Router>
    );

}

export default Navbar;