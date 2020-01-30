import React, { useState ,useEffect } from 'react';

import PImageGrabber from './PImageGrabber';

import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

function UseProjects() {
    const [projects, setProjects] = useState([]);

    useEffect (() => {
        firebase
            .firestore()
            .collection('projects')
            .onSnapshot((snapshot) => {
                const newProjects = snapshot.docs.map((doc) => ({
                    id: doc.id, 
                    ...doc.data()
                }))

                setProjects(newProjects)
            })
    }, [])

    return projects;
}

const Projects = () => {
    const projects = UseProjects();
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <div id="projects">
            {projects.map((project) => 
                <div className="project__details" key={project.id}>
                        <PImageGrabber imgName={project.altTitle} /> {/*Image about 900 x 650 */}
                        <div className="project__specs">
                            <animated.p style={props} className="project__title">{project.title}</animated.p>
                            <p className="project__desc">{project.desc}</p>
                            <h2>Skills</h2>
                            <ul className="project__tools">
                                {project.skills.map((skill) =>  
                                    <li className="project__skill">{skill}</li>
                                )}
                            </ul>
                            <a target="_blank" rel="noopener noreferrer" href={project.source} className="btn__wp btn__source"><FontAwesomeIcon className="btn__icon" icon={faCode} />Source code</a>
                            <a target="_blank" rel="noopener noreferrer" href={project.demo}className="btn__wp btn__demo"><FontAwesomeIcon className="btn__icon" icon={faEye} />Live preview</a>
                        </div>         
                </div>
            )}
            </div>
    )
}


export default Projects;