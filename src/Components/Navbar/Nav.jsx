import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div className='w-full h-16 md:h-24 bg-transparent fixed top-0 flex justify-between items-end px-5 lg:px-24 z-50'>
      <div className='h-fit relative'>
        <h1 className='font-extrabold text-4xl text-[#ccf382]'><span className={showLogo ? 'text-[#ccf382]' : 'text-[#4731d4]'}>S</span>
          <span className={showLogo ? 'inline' : 'hidden'}>urya</span>
          
        </h1>
        <div className={showLogo ? 'font-extrabold text-xl h-3 w-1 bg-[#ccf382] absolute -bottom-1 left-[0.6rem]' : 'bg-[#4731d4] font-extrabold text-xl h-3 w-1 absolute -bottom-1 left-[0.6rem]'}></div>
        <div className={showLogo ? 'w-2 h-2 rounded-full bg-[#ccf382] left-[0.46rem] absolute' : 'bg-[#4731d4] w-2 h-2 rounded-full left-[0.46rem] absolute'}></div>
      </div>
      <div
        id='dropdown'
        className='w-fit h-fit flex flex-col items-end cursor-pointer'
        onClick={toggleDropdown}
      >
        <div
          className='w-10 md:w-12 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300'
        ></div>
        <div
          className='w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300'
        ></div>
      </div>
      {isOpen && (
        <div className='absolute top-0 right-0 w-32 h-24 bg-gray-100 rounded shadow-md transition-all duration-300 transform -translate-x-full translate-y-full'>
          <div onClick={toggleDropdown} className='w-fit h-fit cursor-pointer'>
            <div className='w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300 rotate-45 translate-y-[0.6rem]'></div>
            <div className='w-7 md:w-9 mt-4 h-[0.12rem] rounded bg-[#ccf382] md:bg-[#4731d4] transition-all duration-300 -rotate-45 -translate-y-2'></div>
          </div>
          {/* Dropdown content goes here */}
        </div>
      )}
    </div>
  );
};

export default Nav;
