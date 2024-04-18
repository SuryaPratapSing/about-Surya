import React, { useState, useEffect } from 'react';
import './Nav.css'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setAnimationClass(isOpen ? 'reverse' : 'animate-dropdown');
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Toggle body overflow
  };
  
  

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      if (yPos >= 50) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full h-16 md:h-24 md:bg-transparent bg-[#4731d4] md:fixed top-0 flex justify-between items-end px-5 lg:px-24 z-50 relative'>
      <div className='h-fit relative'>
        <h1 className='font-extrabold text-4xl text-[#ccf382]'><span className={showLogo ? 'text-[#ccf382]' : 'text-[#f06c52]'}>S</span>
          <span className={showLogo ? 'inline' : 'hidden'}>urya</span>

        </h1>
        <div className={showLogo ? 'font-extrabold text-xl h-3 w-1 bg-[#ccf382] absolute -bottom-1 left-[0.6rem]' : 'bg-[#f06c52] font-extrabold text-xl h-3 w-1 absolute -bottom-1 left-[0.6rem]'}></div>
        <div className={showLogo ? 'w-2 h-2 rounded-full bg-[#ccf382] left-[0.46rem] absolute' : 'bg-[#f06c52] w-2 h-2 rounded-full left-[0.46rem] absolute'}></div>
      </div>
      <div className='relative'>
        <div
          id='dropdown'
          className='w-fit h-fit flex flex-col items-end cursor-pointer'
          onClick={toggleDropdown}>
          <div
            className={showLogo ? 'w-10 md:w-12 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300' : 'w-10 md:w-12 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#f06c52] transition-all duration-300'}></div>
          <div
            className={showLogo ? 'w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300' : 'w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#f06c52] transition-all duration-300'}></div>
        </div>

        {isOpen && (
        <div className={`absolute -top-14 -right-14 transform origin-top w-fit h-auto bg-gray-50 rounded shadow-md transition-all duration-300 pl-20 pr-14 py-10 z-40 text-[#4731d4] animate-dropdown ${animationClass}`}>
          <div onClick={toggleDropdown} className='h-fit cursor-pointer float-right w-64 flex justify-end'>
            <div>
            <div className='w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300 rotate-45 translate-y-[0.6rem]'></div>
            <div className='w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300 -rotate-45 -translate-y-2'></div>
            </div>
          </div>
          <ul className='leading-[3rem]'>
            <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
              <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
              My Work
            </li>

            <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
              <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
              My Shelf
            </li>


            <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
              <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
              My Resume
            </li>


          </ul>
          <h2 className='text-gray-400 text-lg tracking-widest mt-10'>SAY HELLO</h2>


          <ul className='leading-[3rem]'>
            <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
              <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
              hello@suryap.netlify.app
            </li>

            <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
              <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
              wht/mrsurya
            </li>


          </ul>
          <ul className='flex gap-8 text-lg mt-10'>
                    <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            WT
                        </li>

                        <li className="transition-colors duration-300 relative group z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            <a href='https://github.com/SuryaPratapSing'>GH</a>
                        </li>

                        <li className="transition-colors duration-300 relative group  z-20 flex items-center cursor-pointer w-fit">
                            <span className="group-hover:bg-blue-400/30 w-5 h-5 -right-3 absolute transition-all duration-300"></span>
                            <a href='https://www.linkedin.com'>LN</a>
                        </li>
                       
                    </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Nav;