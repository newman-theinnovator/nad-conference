import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-12 px-4 bg-green-100"> {/* Green tint from flier */}
      <div className="max-w-5xl mx-auto text-center shadow-md p-6 rounded-lg bg-white">
        <h3 className="text-3xl font-bold mb-6">Stay Updated</h3>
        <p className="text-lg mb-6">Subscribe for the latest news, speaker announcements, and updates.</p>
        <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input type="email" placeholder="Your email" className="py-3 px-4 rounded-lg w-full md:w-64" />
          <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">Subscribe</button>
        </form>
        <p className="text-sm mt-4">We'll use Zapier for certification and automation integrations.</p>
      </div>
    </section>
  );
};

export default Newsletter;