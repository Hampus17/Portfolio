import React, { useEffect } from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Link, 
    Route,
    useLocation
} from 'react-router-dom'

import { Home, Contact, Projects, About, AboutPage } from '../components'

import logo from '../assets/images/Logo.svg';

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

function handleNav(event) {
    if(event.target.id.includes('hamburger')) {
        event.target.classList.toggle = 'navShow';
    } else {
        let parent = event.target.parentElement;
        parent.classList.toggle = 'navShow';
    }
}

const Navbar = (props) => {
    return (
        <Router>
            <ScrollToTop />
            <div id="nav">
                <ul className="desktopNav">
                    <li id="logo"><img src={logo} alt="Logo"></img></li> 
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link id="resumeBtn" className="btn__md" to="/resume">resumé</Link></li>
                </ul>
                <div className="mobileNav">
                    <img id="mobileLogo"></img>
                    <div id="hamburger" onClick={handleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul id="navList">
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/projects">projects</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                    <About />
                    <Projects />
                </Route>
                <Route path="/about" component={AboutPage} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>

        </Router>
    );

}

export default Navbar;