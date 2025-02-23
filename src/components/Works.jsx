import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AI-Powered Code Reviewer',
    description: 'A web app that uses machine learning to analyze and suggest improvements for code quality.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
    link: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack e-commerce analytics dashboard providing real-time insights.',
    technologies: ['Next.js', 'MongoDB', 'GraphQL', 'TailwindCSS'],
    link: '#',
  },
  {
    title: 'Cloud-Based Task Manager',
    description: 'A productivity app that syncs tasks across multiple devices with cloud storage.',
    technologies: ['Vue.js', 'Firebase', 'Express.js', 'Docker'],
    link: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'An app that helps developers create stunning, customized portfolios with minimal effort.',
    technologies: ['React', 'TypeScript', 'Chakra UI', 'AWS'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
