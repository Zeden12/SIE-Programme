// components/ExploreMore.jsx
import React from 'react';

const ExploreMore = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Join the SIE Programme and gain access to cutting-edge technology education that prepares you for tomorrow's challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/programs" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300"
          >
            Explore Programs
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition duration-300"
          >
            Request Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;