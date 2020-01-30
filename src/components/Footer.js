import React from 'react'

// TODO add contact form instead of contact button

const Footer = () => {
    return (
            <div id="footer">
                <div id="footerLeft">
                    <h1>Let's make something beautiful together</h1>
                    <p id="footerSub">I am currently taking on new projects. Would you like to discuss yours?</p>
                </div>
                <form id="footerForm">
                    <div id="formRow">
                        <input type="text" id="formFName" name="firstname" placeholder="Your name.."/>
                    </div>
                    <div id="formRow">
                        <input type="text" id="formLName" name="lastname" placeholder="Your last name.."/>
                    </div>
                    <div id="formRow">
                        <input type="email" id="formEmail" name="email" placeholder="Your@email.com"/>
                    </div>
                    <div class="formRow">
                        <select id="subject" name="subject">
                            <option value="subject">Subject</option>
                            <option value="job">Job enquiry</option>
                            <option value="message">Message</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>
                    <div id="formRow">
                        <textarea id="message" name="subject" placeholder="Write something.." height="200px" ></textarea>
                    </div>
                    <div class="formRow">
                        <input className="btn__wp" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>  
    )
}

export default Footer;