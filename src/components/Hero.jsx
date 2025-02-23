import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero section-transition">
      <div className="overlay"></div>
      <motion.div 
        className="hero-content container"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Alex M. Muli</span>
        </h1>
        <p className="hero-subtitle fade-in-text">
          Crafting cutting-edge web solutions with precision and passion.
        </p>
        <a href="#projects" className="cta-button">View My Work</a>
      </motion.div>
    </section>
  );
};

export default Hero;