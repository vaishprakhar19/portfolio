import React from 'react';
import "./projects.css";
import projectsData from '../components/projects.json';
// import profileimage from '../resources/profile.png';

const Projects = () => {
    return (
        <div id="projects" className='section'>
            <h2 className='heading'>Projects</h2>
            <p className='sub-heading center'>Here are some of my significant projects</p>

            <div className='projects-container'>
                {projectsData.map(project => (
                    <div key={project.id} className="project">
                        <a href={project.link} target="_new" className='hyperlink'>
                            <img src={project.image} className="project-image" alt={project.heading} />
                            <div className="tech-stack-container">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="tech-stack">{tech}</span>
                                ))}
                            </div>
                            <div className="project-info">
                                <div className="project-heading">{project.heading}</div>
                                <div className="project-date">{project.date}</div>
                                <div className="project-detail">{project.detail}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
