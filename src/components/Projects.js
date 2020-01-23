import React, { useState ,useEffect } from 'react';

import PImageGrabber from './PImageGrabber';

import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

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

    return (
        <div id="projects">
            {projects.map((project) => 
                <div className="project__details" key={project.id}>
                        <PImageGrabber imgName={project.altTitle} /> {/*Image about 900 x 650 */}
                        <h1 className="project__type">Personal Project</h1> 
                        <h1 className="project__title">{project.title}</h1>
                        <p className="project__desc">{project.desc}</p>
                        <h2>Skills</h2>
                        <ul className="project__tools">
                            {project.skills.map((skill) => 
                                <li className="project__skill">{skill}</li>
                            )}
                        </ul>
                        <button className="btn__transparent btn__source"><FontAwesomeIcon className="btn__icon" icon={faCode} />Source code</button>
                        <button className="btn__transparent btn__demo"><FontAwesomeIcon className="btn__icon" icon={faEye} />Live preview</button>
        
                </div>
            )}
            </div>
    )
}


export default Projects;