import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleNav = () => setNav(!nav);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Projects' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className='flex justify-between items-center h-20 max-w-7xl mx-auto px-6'>
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className='w-32' />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <ul className='flex'>
            {navItems.map(item => (
              <li
                key={item.id}
                className='relative mx-3 group'
              >
                <a href={`#${item.text.toLowerCase()}`} className='text-sm font-semibold tracking-wide py-2 px-1 inline-block uppercase'>
                  {item.text}
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300'></span>
                </a>
              </li>
            ))}
          </ul>

        </div>
        
        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose size={24} className="text-gray-800" /> : <AiOutlineMenu size={24} className="text-gray-800" />}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full bg-white shadow-2xl w-64 transform transition-transform duration-300 ease-in-out z-50 ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <img src={Logo} alt="logo" className='w-24' />
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={20} />
          </div>
        </div>
        <div className="py-4">
          {navItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.text.toLowerCase()}`}
              className='block px-6 py-3 text-gray-800 hover:bg-gray-50 border-l-4 border-transparent hover:border-indigo-600 transition-all duration-200'
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={handleNav}
        ></div>
      )}
    </div>
  );
};

export default Navbar;