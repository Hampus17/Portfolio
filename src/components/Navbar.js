import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useLocation
} from 'react-router-dom'

import { Home, Contact, Projects, About, AboutPage } from '../components'

import logo from '../assets/images/Logo.png';

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

    var lastSt;
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset;
            let nav = document.querySelector("#nav");

            if (scrollTop > lastSt) {
                nav.style.top = "-15%";
                nav.style.background = "none";
            } else {
                nav.style.top = "0";
                if (lastSt < 200)
                    nav.style.background = "none";
                else
                    nav.style.background = "#080808";
            }

            lastSt = scrollTop;
        })
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <div id="nav">
                <ul className="desktopNav">
                    <li id="logo"><img src={logo} alt="Logo"></img></li>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/about">about</Link></li>
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
