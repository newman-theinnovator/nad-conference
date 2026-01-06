import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendar, FaMapMarkerAlt, FaInfoCircle, FaStar } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full z-20 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">NAD Conference 2026</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline flex items-center"><FaHome className="mr-1" /> Home</Link></li>
          <li><Link to="/about" className="hover:underline flex items-center"><FaInfoCircle className="mr-1" /> About</Link></li>
          <li><Link to="/agenda" className="hover:underline flex items-center"><FaCalendar className="mr-1" /> Agenda</Link></li>
          <li><Link to="/speakers" className="hover:underline flex items-center"><FaUsers className="mr-1" /> Speakers</Link></li>
          <li><Link to="/venue" className="hover:underline flex items-center"><FaMapMarkerAlt className="mr-1" /> Venue</Link></li>
          <li><Link to="/exciting-facts" className="hover:underline flex items-center"><FaStar className="mr-1" /> Facts</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;