// src/components/CTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

/**
 * Animation variants for the CTA container and its elements.
 */
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: 'easeOut' } 
  }
};

const CTA = ({ onContactClick }) => {
  return (
    <section id="cta" className="cta-section section-transition">
      <motion.div 
        className="cta-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="cta-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Ready to elevate your project?
        </motion.h2>
        <motion.p 
          className="cta-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Let’s collaborate and build something extraordinary.
        </motion.p>
        <motion.button 
          className="cta-button" 
          onClick={onContactClick}
          whileHover={{ scale: 1.05, translateY: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTA;
