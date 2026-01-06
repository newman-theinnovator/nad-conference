import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Add a relevant image
import Countdown from './Countdown';

const Hero = () => {
  return (
    <header 
      className="bg-cover bg-center py-24 px-4 md:py-32" 
      style={{ backgroundImage: `url(${heroBg})` }} 
      id="home"
    >
      <div className="max-w-5xl mx-auto text-center bg-white bg-opacity-80 p-8 rounded-xl shadow-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-green-800">20th AGM & Scientific Conference</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pink-700">Nigerian Association of Dermatologists</h2>
        <p className="text-2xl md:text-4xl font-semibold mb-8 text-gray-800">Theme: Treatment and Prevention of Skin Diseases as a Global Health Priority</p>
        <div className="text-xl mb-8 text-gray-700">
          <p><strong>Date:</strong> 23rd - 26th June, 2026</p>
          <p><strong>Venue:</strong> Benin City, Edo State, Nigeria</p>
        </div>
        <Countdown />
        <a 
          href="https://lu.ma/" 
          className="bg-green-600 text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-green-700 transition mt-6 inline-block"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Register Now on Luma
        </a>
      </div>
    </header>
  );
};

export default Hero;