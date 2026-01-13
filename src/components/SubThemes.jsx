import React from 'react';

const SubThemes = () => {
  return (
    <section className="py-12 px-4 bg-gray-100" id="sub-themes">
      <div className="max-w-4xl mx-auto shadow-md p-6 rounded-lg bg-white">
        <h3 className="text-3xl font-bold mb-6 text-center">Sub-Themes</h3>
        <ul className="space-y-4">
          <li className="bg-pink-200 p-4 rounded-lg text-lg shadow-sm hover:shadow-md transition-shadow">Closing the Dermatology care gap: Access, Affordability and Equity</li>
          <li className="bg-green-600 text-white p-4 rounded-lg text-lg shadow-sm hover:shadow-md transition-shadow">Navigating the intersection of Knowledge, technologies and innovations with local Challenges</li>
          <li className="bg-pink-200 p-4 rounded-lg text-lg shadow-sm hover:shadow-md transition-shadow">Achieving Health equity and addressing burning issues in skin care in Nigeria</li>
        </ul>
      </div>
    </section>
  );
};

export default SubThemes;