// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'AI-Powered Code Reviewer',
    description: 'A web app that uses machine learning to analyze and suggest improvements for code quality.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack e-commerce analytics dashboard providing real-time insights.',
    technologies: ['Next.js', 'MongoDB', 'GraphQL', 'TailwindCSS'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Cloud-Based Task Manager',
    description: 'A productivity app that syncs tasks across multiple devices with cloud storage.',
    technologies: ['Vue.js', 'Firebase', 'Express.js', 'Docker'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'An app that helps developers create stunning, customized portfolios with minimal effort.',
    technologies: ['React', 'TypeScript', 'Chakra UI', 'AWS'],
    demoLink: '#',
    githubLink: '#',
  },
];

/**
 * Animation variants for the projects container and individual cards.
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

/**
 * Projects Component
 * Renders a grid of project cards with animated transitions.
 */
const Projects = () => {
  return (
    <section id="projects" className="projects section-transition">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={cardVariants}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="tech-item">{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.demoLink} className="demo-btn">Live Demo</a>
                <a href={project.githubLink} className="github-btn">GitHub</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
