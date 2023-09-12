import React, { useState, useEffect } from 'react';

import Brand from '../../assets/brand.png'

import { NavLink, useMatch } from 'react-router-dom';

function Sidebar({ children }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const aboutMatch = useMatch('/');
  const experienceMatch = useMatch('/experience');
  const skillsMatch = useMatch('/skills');
  const contactMatch = useMatch('/contact');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMobileNav(false);
      }
    };

    // Add a listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  const navLinks = [
    { to: '/', label: 'About', active: aboutMatch },
    { to: '/experience', label: 'Experience', active: experienceMatch },
    { to: '/skills', label: 'Skills', active: skillsMatch },
    { to: '/contact', label: 'Contact', active: contactMatch },
  ];


  return (
    <div className="md:h-screen flex md:translate-x-0 dark:bg-cyan-950 dark:text-white">
      {/* Mobile navigation */}
      {showMobileNav && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50" onClick={closeMobileNav}></div>
      )}
      <nav className={`fixed inset-y-0 left-0 w-full md:hidden transform ${showMobileNav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white dark:bg-cyan-950 dark:text-white z-30`}>
        <div className="flex flex-col h-screen justify-center items-center">
          <img src={Brand} alt="Jatin Rai" className='absolute top-20 dark:filter dark:invert' />
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`hover:text-red-600 dark:hover:text-cyan-500 ${link.active ? 'text-red-500 dark:text-cyan-300  font-bold' : ''}`}
                onClick={closeMobileNav}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col">
        <NavLink to='/' className="flex items-center justify-center pt-20 pl-20 cursor-pointer">
          {/* Logo */}
          <img src={Brand} alt="Jatin Rai" width={120} className="scale-110 dark:filter dark:invert" />
        </NavLink>
        <nav className="flex flex-col flex-auto justify-center items-center font-semibold">
          <div className="flex flex-col gap-10 pl-20">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`
          hover:text-red-600 dark:hover:text-cyan-300 hover:scale-110
          ${link.active ? 'text-red-600 dark:text-cyan-300 font-bold' : ''}
        `}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

      </div>
      <main className='w-screen h-screen'>
        {children}
      </main>
      {/* Mobile navigation toggle button */}
      <button
        className="md:hidden fixed top-5 right-5 z-40 text-3xl text-red-500 dark:text-white hover:text-red-700 dark:hover:text-white"
        onClick={toggleMobileNav}
      >
        {showMobileNav ? '×' : '☰'}
      </button>
    </div>
  );
}

export default Sidebar;
