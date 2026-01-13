import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'; // For animated menu
import nadLogo from '../assets/nad-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
  });

  return (
    <nav className="bg-green-600 text-white py-4 px-6 fixed w-full z-10 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={nadLogo} alt="NAD Logo" className="h-10 mr-4" />
          <h1 className="text-2xl font-bold">NAD Conference 2026</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="hover:text-green-200 transition">Home</a></li>
          <li><a href="#sub-themes" className="hover:text-green-200 transition">Sub-Themes</a></li>
          <li><a href="#about" className="hover:text-green-200 transition">About</a></li>
          <li><a href="#agenda" className="hover:text-green-200 transition">Agenda</a></li>
          <li><a href="#speakers" className="hover:text-green-200 transition">Speakers</a></li>
          <li><a href="#sponsors" className="hover:text-green-200 transition">Sponsors</a></li>
          <li><a href="#venue" className="hover:text-green-200 transition">Venue</a></li>
          <li><a href="#fun-facts" className="hover:text-green-200 transition">Facts</a></li>
          <li><a href="#newsletter" className="hover:text-green-200 transition">Newsletter</a></li>
        </ul>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu with Animation */}
      {isOpen && (
        <animated.ul style={menuAnimation} className="md:hidden flex flex-col space-y-4 mt-4 px-4 bg-green-500 rounded-b-lg">
          <li><a href="#hero" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#sub-themes" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Sub-Themes</a></li>
          <li><a href="#about" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#agenda" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Agenda</a></li>
          <li><a href="#speakers" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Speakers</a></li>
          <li><a href="#sponsors" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Sponsors</a></li>
          <li><a href="#venue" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Venue</a></li>
          <li><a href="#fun-facts" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Facts</a></li>
          <li><a href="#newsletter" className="hover:text-green-200 transition" onClick={() => setIsOpen(false)}>Newsletter</a></li>
        </animated.ul>
      )}
    </nav>
  );
};

export default Navbar;