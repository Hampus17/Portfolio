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
                <li key={project.id}>
                    <p>{project.title}</p>
                    <p>{project.desc}</p>
                    {project.skills.map((skill) => 
                        <p>{skill}</p>
                    )}
                   <PImageGrabber imgName={project.altTitle} />
                </li>
            )}
        </div>
    )
}


export default Projects;