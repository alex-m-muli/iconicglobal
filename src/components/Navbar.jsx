// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * ----------------
 * Renders the navigation bar with a logo, navigation links, and controls for toggling dark mode
 * and the mobile menu. The navbar uses a glassmorphism effect and updates its background on scroll.
 *
 * Props:
 * - toggleDarkMode {Function} Callback to toggle dark mode.
 * - isDarkMode {Boolean} Indicates if dark mode is active.
 * - onContactClick {Function} Callback invoked when the Contact link is clicked.
 */
const Navbar = ({ toggleDarkMode, isDarkMode, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Collapse the menu on nav link click (if open)
  const handleNavLinkClick = (e) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="logo">Alex M. Muli</div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={handleNavLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
          <li>
            <a
              href="#cta"
              onClick={(e) => {
                handleNavLinkClick(e);
                onContactClick && onContactClick(e);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-controls">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
