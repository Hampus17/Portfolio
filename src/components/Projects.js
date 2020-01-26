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
                        <div className="project__specs">
                            <p className="overlap__text project__title">{project.title}</p>
                            <p className="project__desc">{project.desc}</p>
                            <h2>Skills</h2>
                            <ul className="project__tools">
                                {project.skills.map((skill) => 
                                    <li className="project__skill">{skill}</li>
                                )}
                            </ul>
                            <button className="btn__wp btn__source"><FontAwesomeIcon className="btn__icon" icon={faCode} />Source code</button>
                            <button className="btn__wp btn__demo"><FontAwesomeIcon className="btn__icon" icon={faEye} />Live preview</button>
                        </div>         
                </div>
            )}
            </div>
    )
}


export default Projects;