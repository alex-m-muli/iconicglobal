// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import './Global.css';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  /**
   * Smoothly scrolls the viewport to the CTA section.
   */
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Open/close contact modal functions (triggered via CTA)
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      {/* Navbar receives the scroll function for the Contact link */}
      <Navbar 
        toggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        onContactClick={scrollToCTA} 
      />
      
      {/* Main page sections */}
      <Home />
      <About />
      <Projects />
      
      {/* CTA section; its button opens the Contact Modal */}
      <CTA onContactClick={openContactModal} />

      {/* Contact modal is rendered conditionally */}
      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
