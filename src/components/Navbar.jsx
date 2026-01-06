import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendar, FaMapMarkerAlt, FaInfoCircle, FaStar, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full z-20 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold">NAD Conference 2026</Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          <li><Link to="/" className="hover:underline flex items-center text-sm lg:text-base"><FaHome className="mr-1" /> Home</Link></li>
          <li><Link to="/about" className="hover:underline flex items-center text-sm lg:text-base"><FaInfoCircle className="mr-1" /> About</Link></li>
          <li><Link to="/agenda" className="hover:underline flex items-center text-sm lg:text-base"><FaCalendar className="mr-1" /> Agenda</Link></li>
          <li><Link to="/speakers" className="hover:underline flex items-center text-sm lg:text-base"><FaUsers className="mr-1" /> Speakers</Link></li>
          <li><Link to="/venue" className="hover:underline flex items-center text-sm lg:text-base"><FaMapMarkerAlt className="mr-1" /> Venue</Link></li>
          <li><Link to="/exciting-facts" className="hover:underline flex items-center text-sm lg:text-base"><FaStar className="mr-1" /> Facts</Link></li>
        </ul>
        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 px-4">
          <li><Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/agenda" className="hover:underline" onClick={() => setIsOpen(false)}>Agenda</Link></li>
          <li><Link to="/speakers" className="hover:underline" onClick={() => setIsOpen(false)}>Speakers</Link></li>
          <li><Link to="/venue" className="hover:underline" onClick={() => setIsOpen(false)}>Venue</Link></li>
          <li><Link to="/exciting-facts" className="hover:underline" onClick={() => setIsOpen(false)}>Facts</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;