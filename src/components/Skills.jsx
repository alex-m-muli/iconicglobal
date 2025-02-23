// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Front End',
    skills: [
      { name: 'React', proficiency: 90 },
      { name: 'Angular', proficiency: 80 },
      { name: 'Vue.js', proficiency: 75 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 90 },
      { name: 'JavaScript', proficiency: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express', proficiency: 80 },
      { name: 'Django', proficiency: 70 },
      { name: 'Flask', proficiency: 65 },
      { name: 'GraphQL', proficiency: 75 },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Python', proficiency: 90 },
      { name: 'TensorFlow', proficiency: 80 },
      { name: 'Keras', proficiency: 75 },
      { name: 'Scikit-Learn', proficiency: 85 },
      { name: 'PyTorch', proficiency: 70 },
    ],
  },
  {
    category: 'Cloud Computing',
    skills: [
      { name: 'AWS', proficiency: 80 },
      { name: 'Azure', proficiency: 70 },
      { name: 'Google Cloud', proficiency: 65 },
      { name: 'Docker', proficiency: 85 },
      { name: 'Kubernetes', proficiency: 70 },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git', proficiency: 95 },
      { name: 'CI/CD', proficiency: 85 },
      { name: 'REST APIs', proficiency: 90 },
      { name: 'Agile/Scrum', proficiency: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-categories">
          {skillsData.map((categoryData, index) => (
            <div key={index} className="skill-category-block">
              <h3 className="category-title">{categoryData.category}</h3>
              <div className="skill-items">
                {categoryData.skills.map((skill, i) => (
                  <div key={i} className="skill-card">
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.proficiency}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
