import React from 'react';

const Sponsors = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Sponsors & Investors</h3>
        <p className="text-lg mb-4 text-center">Welcoming international investors! Partner with us for visibility at this global event.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform text-center">Sponsor 1</div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform text-center">Sponsor 2</div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;