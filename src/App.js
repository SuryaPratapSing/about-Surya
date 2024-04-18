import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Experiance from './Components/Experiance/Experiance';
import Footer from './Components/Footer/Footer';
import Hero from './Components/HeroSection/Hero';
import Knowladge from './Components/Knowladge/Knowladge';
import Nav from './Components/Navbar/Nav';
import Section from './Components/Section/Section';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Calculate the current page based on scroll position
      const pageHeight = window.innerHeight;
      const currentPage = Math.floor(scrollPosition / pageHeight);
      setCurrentPage(currentPage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  return (
    <>
      <Nav />
      <Hero />
      <Knowladge />
      <Experiance />
      <Section />
      <Contact />
      <Footer />
      <Cursor />

      {/* Conditionally render page indicator */}
      {currentPage !== 5 && (
        <div className="page-indicator">
          {[...Array(5).keys()].map((index) => (
            <div
              key={index}
              className={`indicator-dot ${currentPage === index ? 'active' : ''} ${currentPage === 3 && index === 3 ? 'white-dot' : ''}`}
            ></div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
