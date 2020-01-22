import React, { useEffect } from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Link, 
    Route,
    useLocation
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

import { Home, Contact, Projects, About } from '../components'

import logo from '../assets/images/Logo.svg';

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

const Navbar = (props) => {
    return (
        <Router>
            <ScrollToTop />
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
                </Route>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>

        </Router>
    );

}

export default Navbar;