import React,{useState,useEffect} from 'react'
import Hero from './HeroSection/Hero'
import Knowladge from './Knowladge/Knowladge'
import Experiance from './Experiance/Experiance'
import Section from './Section/Section'
import Contact from './Contact/Contact'

const Main = () => {
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
            <Hero />
            <Knowladge />
            <Experiance />
            <Section />
            <Contact />

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
    )
}

export default Main