// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

/**
 * Animation variants for the Footer.
 */
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

/**
 * Footer Component
 * ----------------
 * Renders the footer with navigation links, social icons, a back-to-top link, 
 * and a copyright notice.
 */
const Footer = () => {
  return (
    <motion.footer 
      id="footer" 
      className="footer-section" 
      data-aos="fade-up"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="footer-container">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#cta">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className="footer-backtotop">
          <a href="#hero">Back to Top</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Alex M. Muli. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};


export default Footer;
