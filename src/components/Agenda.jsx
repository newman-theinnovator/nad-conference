import React from 'react';

const Agenda = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Event Agenda</h3>
        <p className="text-lg mb-4 text-center">Full agenda coming soon. Stay tuned for session details, workshops, and keynotes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-2">Day 1: June 23</h4>
            <p>Opening Ceremony & Keynotes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-2">Day 2: June 24</h4>
            <p>Workshops on Skin Health</p>
          </div>
          {/* Add more days */}
        </div>
      </div>
    </section>
  );
};

export default Agenda;