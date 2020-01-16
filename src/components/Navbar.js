import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Link, 
    Route,
} from 'react-router-dom'

import { Contact, Projects, About } from '../components'


const Navbar = (props) => {
    return (
        <Router>
            <div id="nav">
                <ul>
                    <li id="logo"><img src="../assets/images/Logo.svg" alt="Logo"></img></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link id="resumeBtn" to="/resume">Resumé</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>

        </Router>
    );

}

export default Navbar;