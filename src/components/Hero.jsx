import React from 'react';
import { Parallax } from 'react-scroll-parallax'; // For background parallax

const Hero = () => {
  return (
    <Parallax speed={-10}> {/* Parallax for dynamic depth */}
      <header className="bg-pink-100 py-16 px-4 md:py-24" id="hero">
        <div className="max-w-4xl mx-auto text-center shadow-2xl p-8 rounded-xl bg-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">20th AGM & Scientific Conference</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Nigerian Association of Dermatologists</h2>
          <p className="text-xl md:text-3xl font-bold mb-8 border-2 border-green-600 p-4 rounded-lg">Theme: Treatment and Prevention of Skin Diseases as a Global Health Priority</p>
          <div className="text-lg mb-8">
            <p><strong>Date:</strong> 23rd - 26th June, 2026</p>
            <p><strong>Venue:</strong> CATHELEA CONVENTION AND SUITES No 2, Aiyaro Omogui Street by Chief Daniel Inneh Street /Off Oko Central Off 2nd Ugbor Road, G.R.A. Benin City</p>
          </div>
          <a 
            href="https://lu.ma/" 
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 hover:shadow-lg transition"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register Now on Luma
          </a>
        </div>
      </header>
    </Parallax>
  );
};

export default Hero;