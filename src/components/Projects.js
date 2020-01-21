import React, { useState ,useEffect } from 'react';

import PImageGrabber from './PImageGrabber';

import firebase from '../firebase';

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
                    <div className="project__left">
                        <PImageGrabber className="project__thumb" imgName={project.altTitle} /> {/*Image about 900 x 650 */}
                    </div>
                    <div className="project__right">
                        <h1 className="project__title">{project.title}</h1>
                        <p className="project__desc">{project.desc}</p>
                        <ul className="project__tools">
                            {project.skills.map((skill) => 
                                <li className="project__skill">{skill}</li>
                            )}
                        </ul>
                    </div> 
                </div>
            )}
        </div>
    )
}


export default Projects;