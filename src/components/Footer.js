import React from 'react'

// TODO add contact form instead of contact button

const Footer = () => {
    return (
            <div id="footer">
                <h1>Let's make something beautiful together</h1>
                <p id="footerSub">I am currently taking on new projects. Would you like to discuss yours?</p>
                <p className="footerContact">hampus.a02@gmail.com</p>
                <p className="footerContact">(+46) 070-123 4567)</p>
                <a className="btn_bg" href="/contact">Contact</a>
                <div className="background"></div>
            </div>        
        
    )
}

export default Footer;