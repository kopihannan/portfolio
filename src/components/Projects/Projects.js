import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='my-20'>
            <h1 className='font-bold text-3xl text-center mb-5'>Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 '>
                {
                    projects.map(project => <ProjectCard project={project} key={project.id}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;