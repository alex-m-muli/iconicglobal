// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

/**
 * Animation variants for container and children.
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, 
      when: "beforeChildren" 
    } 
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const skillCategories = [
  {
    title: "Front End",
    skills: ["React", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript/ES6+", "TypeScript", "TailwindCSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Flask", "GraphQL"]
  },
  {
    title: "Machine Learning",
    skills: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "PyTorch"]
  },
  {
    title: "Cloud Computing",
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    title: "Other",
    skills: ["Git", "CI/CD", "REST APIs", "Agile/Scrum"]
  }
];

/**
 * About Component
 * Renders the About section with animated titles, description, technical skills, and hobbies.
 */
const About = () => {
  return (
    <section id="about" className="about section-transition">
      <div className="container about-container">
        <motion.div 
          className="about-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={childVariants}>
            About Me
          </motion.h2>
          <motion.p className="about-description" variants={childVariants}>
            I'm Alex M. Muli, a passionate software engineer dedicated to crafting innovative web solutions.
            With a robust background in computer science and extensive experience in building scalable applications,
            I thrive on solving complex problems with elegant code. My journey is driven by curiosity, continuous learning,
            and an unwavering commitment to excellence.
          </motion.p>
          <motion.div className="technical-skills" variants={childVariants}>
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <React.Fragment key={category.title}>
                  <div className="skill-category">
                    <h4>{category.title}</h4>
                    <ul className="skills-list">
                      {category.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  {index < skillCategories.length - 1 && (
                    <div className="vertical-divider"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
          <motion.div className="hobbies" variants={childVariants}>
            <h3 className="subsection-title">Hobbies</h3>
            <ul className="hobbies-list">
              <li><span role="img" aria-label="Coding">💻</span> Coding</li>
              <li><span role="img" aria-label="Nature">🌿</span> Nature</li>
              <li><span role="img" aria-label="Bike Riding">🚴‍♂️</span> Bike Riding</li>
              <li><span role="img" aria-label="Football">⚽</span> Football</li>
              <li><span role="img" aria-label="Meditation">🧘‍♂️</span> Meditation</li>
              <li><span role="img" aria-label="Caring">🤝</span> Caring for others</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
